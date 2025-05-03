---
layout: ../../layouts/BlogLayout.astro
title: State Management with Flutter
description: A comprehensive overview of state management options in Flutter, explaining the difference between ephemeral and app state, Flutter's declarative nature, and comparing popular state management solutions like Bloc, Provider, and Riverpod with guidance on choosing the right approach for your project.
tags: ["Flutter", "State Management"]
time: 4
featured: true
timestamp: 2022-10-01T02:39:03+00:00
filename: state_management_with_flutter
---
![](https://cdn-images-1.medium.com/max/800/1*pj7bhIAgrxMVZrcEfIgZww.jpeg)
It is no secret to anyone that the Flutter community, Google’s famous UI Toolkit, is growing exponentially, and with it the libraries with which we can manage the shared state of our application.
However, before starting to discuss the options that Flutter and its community offer us today, it is important to remember the definition of the state and how the rendering of the widgets that we display in the application is done by the framework.
![](https://cdn-images-1.medium.com/max/800/1*7sC9KJ_UC-yRYs6NGtLnrg.gif)
### What is the state of an application?
In order to understand what state management is and the managers that allow us to achieve it, we need to understand a concept that we find in multiple pages of the Flutter documentation and can become confusing especially when starting to develop cross-platform applications with this framework: **The state**.
By reading the official Flutter documentation, we can find the definition of State described like this:
“Whatever data you need in order to rebuild your UI at any moment in time”
In simple terms, the state is the set of all the data we need to consider to tell our application **what** is going to be rendered when building the interface for the users.
It should be considered that from a much more general point of view, the state includes all those resources that our application uses. That is, all those images, audios, fonts, and even animations that we use for our application. However, many of these resources are directly managed by the framework and do not require our implementations to work. It is for this reason that it is necessary to study the state that we must manage directly so that the application works according to what we need.
Because of this, let’s review the types of state that we can face at the moment of working on our application:
**Ephemeral State**
When we talk about **ephemeral state**, we directly refer to all that state that is defined within a specific widget and that **does not need to be accessed by an external one in the application’s widget tree**.
In order to use this state, we require a **StatefulWidget**, which through the *setState()* method, allows us to modify the data that is required to rebuild the widget and update the user interface as needed under the context of the application.
In short, whenever we need to cause a widget to be rebuilt in response to user input and we don’t require that widget’s state to be used by others, using ephemeral state via a *StatefulWidget* is the most appropriate option.
**App State**
In a simple application, the ephemeral state may be the optimal solution. However, as the application grows and the need to share state between multiple views increases, using only ephemeral state becomes insufficient and complicates easy maintenance. Therefore, all that state that we want to share between several widgets, and even store between several user sessions, is what we call the **app** **state**.
It is precisely this type of state that we will be discussing in this article. As we proceed, we will realize that the number of options available to manage the state correctly varies widely. However, **it is according to several factors that we will allow ourselves to decide which is the most suitable for our project**.

In order to make it easier for us to identify which type of state we should use for our application, the **official Flutter documentation** offers us this simple but powerful graph:
![](https://cdn-images-1.medium.com/max/800/1*eEycwuRvvvLcN67jhXLVTQ.png)
It is highly important to highlight that our applications can have these two types of status at the same time. That is, **the ephemeral state and the application state are not mutually exclusive,** and identifying in which widgets of our application we can use each type will allow us to create a much cleaner and more scalable code.
*Read more: ~[Differentiate between ephemeral and app state](https://docs.flutter.dev/development/data-and-backend/state-mgmt/ephemeral-vs-app)~*
### Flutter is declarative
One of the most common programming approaches to building interfaces over the last few decades has been the *imperative*. This style makes it possible to build interfaces with a focus on **how the interface is to be built**. However, Flutter being *declarative* allows you to focus on **what is going to be displayed on the interface**.
* **Imperative approach**: Makes it possible to specify the procedure that will be followed so that the user interface is rendered and rebuilt.
* **Declarative approach**: Allows you to specify which components of the view should be created and rebuilt without the need to specify the steps to follow to achieve this goal.

⠀I guess that whenever we talk about how we code in Flutter we could say:
![](https://cdn-images-1.medium.com/max/800/1*g-dVGxnRgwmDwUww98aYQA.gif)
Ba Dum Tss!
Additionally, Flutter doesn’t modify widget instances like other technologies. Instead, **Flutter directly creates a new widget instance when the UI is changed** due to how quickly this tool can do this.
Considering that Flutter is declarative, this framework builds the application interface considering the state. In other words, the entire interface is built with respect to the state it has at the time of interface construction, and when it changes, the interface is rebuilt considering the new state.
![](https://cdn-images-1.medium.com/max/800/1*EPCCvjzoEapxbpdSEV07eg.png)
Formula obtained directly from the Flutter Documentation: ~[Start thinking declaratively](https://docs.flutter.dev/development/data-and-backend/state-mgmt/declarative)~
With this simple formula we can conclude that **the Interface of our application is the result of the build method of our widgets based on the state of our application at the time of construction**.
It is important to mention that the state can change due to multiple factors, among these we can identify user inputs using the application, responses to calls we make to an API and even internal threads in which we perform calculations to meet the use cases of the application. Therefore, being a declarative framework, directly specifying the state on which a widget depends for its construction is of high importance.
### What are my state management options?
As mentioned before, the variety of options for state management is quite wide. The Flutter community is continually offering more options, and this fact, coupled with the widely varying needs of your application, can create an overwhelming scenario.
All in all, we will try to list the options that you will surely hear regularly when discussing State Management in Flutter:
**Bloc**
![](https://cdn-images-1.medium.com/max/800/1*dJJrfHjb_CRoQA37nqffvQ.png)
Bloc stands for *Business Logic Component*, and it is one of the most popular Flutter state management patterns and libraries. It allows building robust applications through a series of events that permit processing the information received at the time of detecting them, so a new state can be created.
Although we can find multiple libraries that implement this pattern for managing the state of our applications, the flow that it follows can be exemplified like this:
1. The user presses an application button and **triggers an** **event**. 2. Bloc is informed about the activation of this event and **requests** the data from a **repository** in charge of providing it (through a call to a database or an API). 3. Bloc receives the requested data and, based on it, **issues a new state** with the information required by the widget that is listening to it. 4. The widget **listening** to the Bloc to get the possible states that can be sent to it, **receives the new state** and **rebuilds the widget** according to it.
![](https://cdn-images-1.medium.com/max/800/1*qTP8QuwnwqQQZlnEHo-KWw.png)
Awesome graph
Bloc is a widely used library for highly scalable applications due to how its implementation can be adapted to all kinds of domain models. However, it is a library that can be complex for developers just starting out with the framework due to its significant learning curve.
*Recommended Library: ~[Flutter_bloc](https://pub.dev/packages/flutter_bloc)~*
**Provider**
![](https://cdn-images-1.medium.com/max/800/1*h4AF5qVpU24WR9xGONXxjA.jpeg)
Provider is another of the most famous community libraries. **It was one of the first recommended by Flutter for handling developer app state**.
With Provider, widgets that report state changes are set at one point of the widget tree, while others listen for those changes to know when to do an interface rebuild. That is, as soon as changes in the state of the application are detected, the widgets that require this data to render the view to the user will be rebuilt without the need to unnecessarily affect other components in the Widgets tree.
In Provider, we have 3 Widgets that make the above possible:
* **ChangeNotifier**: This component allows to notify the widgets that are listening to it whenever a change of state occurs.
* **ChangeNotifierProvider**: This component allows you to listen to and expose ChangeNotifier components. This class is basically a wrapper provider for those widgets that implement ChangeNotifier.
* **Consumer**: This Widget is the one that listens to the changes notified by the ChangeNotifier and is in charge of running the build method to apply the changes corresponding to the new state of the application.

⠀Despite being a functional state manager for simple applications, *Remi Rousselet*, creator of this library, worked on an iteration that did not directly depend on Flutter, instead of it, this new version is directly associated with Dart.
*Recommend Library: ~[Provider](https://pub.dev/packages/provider)~*
**Riverpod**
![](https://cdn-images-1.medium.com/max/800/1*m6wPdUK2w1MFrQwKosDayg.png)
Riverpod is a library intentionally developed by *Remi Rousselet* to be a successor to Provider. It does not directly depend on Flutter, unlike Provider.
Riverpod allows you to wrap your application in a *ProviderScope* , which **makes it possible to call and access the required Provider from any Application Widget you wish to use it in**, making it a straightforward, simple, and fast state implementation.
AS mentioned, one of the biggest advantages of Riverpod over Provider is that since it does not depend on Widgets, it is possible to declare a provider and use it in any widget of the application regardless of the parent widget. Providers with Riverpod are declared as **global variables** that are placed in any project file.
*Recommend Library: ~[Flutter_riverpod](https://pub.dev/packages/flutter_riverpod)~*

There are many other options to discuss regarding state management such as **InheritedWidget & InheritedModel**, **Redux**, **Getit**, **Mobx**, **Binder**, **GetX**, **states_rebuilder** and more. Each of these options has its own implementations, advantages, and disadvantages and it is up to you and your team to find the most suitable one for your needs.
However, it is important to identify which of these options is best for your project and work team.
![](https://cdn-images-1.medium.com/max/800/1*CbzlmbZPv4V8nXXme3kXDg.gif)
### Why is it important to identify the most adequate state manager for my project?
In the world of software and development, defining the most suitable solutions for the requirements of our project can vary depending to several factors.
According to what we mentioned before, those simple applications in which we do not need to handle a state greater than what we will use in a single widget, **a** ***StatefulWidget*** **can be enough to meet the minimum requirements**. However, an application that has several views in which we will share a lot of data between them, share information between several users and in which it is planned to scale after finishing the version with the minimum viable product, **using StatefulWidgets may not be enough**.
In addition to the above, each of the available state managers offers different approaches to the same goal. **Implementing** ***Bloc*** **or even** ***Provider*** **in a simple application can be overkill**, and although it is possible, there are solutions that require much less time to achieve the same goal.
Optimizing the time it requires for a project to be completed is a very important factor in the software industry. **In addition, implementing needless and complex solutions can make our code hard to understand and refactor.**
However, all of this is subject to criteria that will allow your team to decide which option is best for the project.
### Which State Manager is better for my projects?
![](https://cdn-images-1.medium.com/max/800/1*JyApmfXzf9xnpk2Jv8jUIA.gif)
**IT DEPENDS**
Just as we mentioned previously, **it is impossible to point to a silver bullet that offers the best solution for all the software engineering projects that we work with Flutter**. The following criteria allow us to have a better idea of which tool to manage the state offers us the best conditions for our projects:
* **Project scalability**: Identifying the projection and planning of the project in the medium and long term will allow us to find a state manager that scales easily according to this projection.
* **Expertise of the project development team**: Although a developer must always be willing to learn, considering the team’s domain with respect to state managers can implement much faster and more robust solutions according to the chosen option.
* **State manager repository activity**: Choosing a state manager that is constantly updated shows that maintainers will continue to fix potential bugs and offer even easier solutions to current implementations.
* **Documentation**: A well-documented library allows for a smooth and safe implementation, which reduces the space for bugs and performance issues.
* **Developer community**: Having a community willing to answer questions, which in turn contributes to a much more complex documentation, facilitates the implementation and maintenance of the chosen state manager.

⠀It is important to keep in mind that although we offer a list of aspects and/or guiding factors, **we invite you to identify and list more with your work team**, taking into account the scope of the organization. These factors can be adapted and/or or modified according to the needs of the company and the project.
Additionally, **I strongly recommend not limiting yourself to knowing only one or two status managers**, reading about other options when you have the opportunity will allow you to make a much more solid decision to offer the best to your development team and project stakeholders!

Thank you very much for the time spent reading this article. I hope that you can use the knowledge exposed here to work on the best possible solution regarding state managers for Flutter projects with your team.
![](https://cdn-images-1.medium.com/max/800/1*20RbrNFz0lUCQpLSs67ihQ.gif)
