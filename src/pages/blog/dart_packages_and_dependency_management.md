---
layout: ../../layouts/BlogLayout.astro
title: Dart packages & Dependency Management in Flutter
description: A comprehensive guide explaining how to effectively manage dependencies in Dart projects, covering package structure, pubspec files, and best practices for implementing external libraries.
tags: ["Project Management", "Tasks"]
time: 4
featured: true
timestamp: 2022-09-05T02:39:03+00:00
filename: dart_packages_and_dependency_management
---

# ![](https://cdn-images-1.medium.com/max/800/0*8KQfH7R-ws7RZ2gm.png)
During the last couple of months, I have been trying to dive even more into the basics of Dart, the programming language developed by [Google](https://medium.com/u/be36e94a7e47). One of the topics that caught my attention was **dependency management** since this is a development aspect that can make our projects **save time and effort**.
By understanding the basics of how dependency management works in Dart, we will be able to quickly know where to find simple solutions for complex challenges we could face during development and how to implement them.
Without further ado,
![](https://cdn-images-1.medium.com/max/800/1*szA0M4y56CQB3AVQsRZt2g.gif)
### What is a Dart Package?
It blew my mind to know that there is no such thing as a “Dart project” (conventions aside). The correct terminology for what we call a “project” is actually “Dart Package” and soon you will be understanding why! For now, let’s understand how Dart Packages work:
According to the official **[Dart documentation](https://dart.dev/guides)**:
A Dart package is a directory containing a [pubspec file](https://dart.dev/tools/pub/pubspec). The pubspec contains some metadata about the package. Additionally, a package can contain dependencies (listed in the pubspec), Dart libraries, apps, resources, tests, images, and examples.
**But, what does this really mean?** Basically, you can think of a *Dart package as a box that contains everything that is necessary for us to build one or more functionalities with the Dart language*. Whenever we want to build something for our personal projects or for other developers to use, a dart package containing the logic, resources, media, and even other libraries must be created.
![](https://cdn-images-1.medium.com/max/800/1*-Dcj0kn910_0AwNeY9khFQ.gif)
### Dependencies of a Dart Package
Usually, when building Flutter applications we require to implement screens with complex components, we could also need to connect to an external database with the data we need for our application. As developers, we could think about implementing all of these requirements with code built by ourselves, but in reality, **this will require time and effort we usually can’t afford when facing deadlines**. It is here that understanding and using dart libraries published by other developers with these functionalities can save us the hassle.
**Dependency management** in Dart is as simple as it can be for developers to quickly implement publicly available libraries into their packages. Using packages created by other developers to speed up the time it requires from us to develop an application is a common practice. In addition, **it shows how working together, as a community, can help us create solutions to common problems.**
Here we can get to one of the most interesting aspects of dart packages: A package that is not going to be publicly posted for other developers to use is called an **Application package**, while one that is going to be uploaded and made available for others is called a **Library package**.
Once a library package is added to our package, our projects starts depending on it to achieve whatever goal it has. Therefore, This library becomes a **dependency** as soon as we add it to our package!
### How to manage our dependencies?
The dependencies we add to our application can be continuously improved by the developer or team maintaining them. Easier implementations and bug fixes can always come out after a library has been published. In addition, our project could depend on one library, but as it gets bigger, the chances of us using more libraries increase.
Because of the points mentioned above, supervising our dependencies and making sure that the implementation corresponds to the version we are using is **crucial** for escalation and maintenance purposes. Glady, managing our dependencies and making sure they are updated can be very simple in Dart:
**The Pubspec.yaml file**
If something can be said about the dart packages is that every one of them **must** contain a *pubspec.yaml* file. Inside of it, we can specify the metadata our package needs to use its dependencies.
In here, you can see some lines of the pubspec.yaml file created for every flutter application whenever we run the command

`flutter create {name_of_the_app}`

As mentioned before, our dart project is actually a package. This means that just like the dependencies we add to it, our dart package should also contain a name, version, description, platforms, assets, and one of the most important fields, its **dependencies**.
All of these aspects of our package can be specified inside the *pubspec.yaml* file!
![](https://cdn-images-1.medium.com/max/800/1*54BAKmiUW7uklrMJDZClpg.png)
Once we use the command to generate the initial Flutter project, a *pubspec.yaml* file shown above is generated. As you can see, it contains the aspects mentioned before **and it even supports more**, we could discuss more about this file and the possibilities it offers to us. However, what you need to consider right now is that whenever you want to manage the metadata of your dart package or **the dependencies** it is using, your go-to file is the *pubspec.yaml*!
Every time you work on a dart package, updating the metadata inside this file accordingly is a good practice. What’s more, if you are planning on publishing your package for other developers to use it, updating the metadata becomes a mandatory task for you to consider before publishing and updating the library.
![](https://cdn-images-1.medium.com/max/800/1*Wt6vjB0fuoeLMjtBkLAJ6A.png)
In addition, making sure the correct name and version of the libraries you want to use add as dependencies to your package have been correctly added. Usually, maintainers use **[Semantic versioning 2.0.0](https://semver.org/)** to make sure the users consuming their dependency know when and how to work with patches and major and minor changes.
![](https://cdn-images-1.medium.com/max/800/0*IF8LyYtfUWsQS6YN.png)
**The Pubspec.lock file**
Whenever we add a dependency into our *pubspec.yaml* file, all the information about it is stored inside a file that contains all the packages that the one we created requires to work. In addition, **it also contains the packages that the ones we added depend on**. The file containing all of this information is ***pubspec.lock***.
The pubspec.lock file contains even more data about the packages our project uses. However, it does not only contain the information about the libraries we directly added inside the pubspec.yaml file. **This file also contains information about the libraries the dependencies we added depend on!**
To make a quick summary, we can classify our dependencies according to the number of libraries they require to be associated with the package using them:
* **Intermediate**: These are the dependencies that are directly associated with your package.
* **Transitive**: These are the dependencies used by the packages the one you directly work on depends on.

⠀Let’s see an example of how the information about the packages required for our project is shown inside this file:
```dart
# Generated by pub
# See https://dart.dev/tools/pub/glossary#lockfile
packages:
    async:
      dependency: transitive
      description:
          name: async
          url: "https://pub.dartlang.org"
      source: hosted
      version: "2.8.2"
    boolean_selector:
      dependency: transitive
      description:
          name: boolean_selector
          url: "https://pub.dartlang.org"
      source: hosted
      version: "2.1.0"
```

### So… What is the difference between libraries and packages?
![](https://cdn-images-1.medium.com/max/800/1*yHhatnpIFZRfrhgjvZUBlw.gif)
This is a question that I personally had for a couple of months, and the answer is very simple!
We can understand the difference if we check the directory of one of our Flutter projects. Inside it, we can see a **lib** folder that is automatically generated. **Every file inside this folder will be accessible whenever we publish our package for others to use it.** However, other files inside the rest of the folders (like *test* or *bin*) will not be accessible to others.
From this, we can conclude that **a package can contain one or more libraries inside of it.**
One very important aspect to know and consider before publishing your library is that **only the information inside the lib folder will be available for other developers to use.**
### How do I use a library package?
There are multiple ways of adding dependencies to our project. But first we need to know where we can find these dependencies:
**The pub package manager**
Dart’s package manager is called **pub**, it allows us to get dependencies, upgrade, publish them, and more. Dart offers a site for users to host all the dependencies and their documentation, this is the **[pub.dev](https://pub.dev/)** site. Here, you can look for libraries your package needs and read about how they work, how to install them, and even examples of how to use them.
![](https://cdn-images-1.medium.com/max/800/0*AfJb96S5l9ZwJ7Xf.png)
Usually, whenever a new dependency wants to be added to you dart package and said dependency is added to pub.dev, the following command will add it with the latest version inside the pubspec.yaml file:
```dart
flutter pub add {dependency_name}
```
![](https://cdn-images-1.medium.com/max/800/1*ykQKddS-y9G3SkPgd6rePg.png)
This command will directly add the dependency to your package and assign the targeted version to the latest stable one.
*Keep in mind that libraries can be loaded in other places like Git or even in your local system, there are no restrictions on this aspect. Nevertheless, [pub.dev](https://pub.dev/) allows developers using dart to quickly find the dependencies they need and to easily add them to their projects.*
**[Pubspec Assist](https://marketplace.visualstudio.com/items?itemName=jeroen-meijer.pubspec-assist)** is a VSCode plugin that allows us to immediately add to our *pubspec.yaml* file a dependency hosted directly in pub.dev
Once we have our dependency added to our *pubspec.yaml* file, we only need to import it inside the dart file we will use it and enjoy it! Each dependency has its own implementation methods. But checking the documentation from the page you have downloaded it from will surely make your life easier.

Dependency management with Dart allows us to be efficient with the time it takes to develop a dart package. There are multiple options for us to add dependencies to our applications, but understanding how they work and how they relate to each other once we implement them can help us know how our package behaves even more.
The Dart community is growing at a great speed, meaning that more libraries that help us create awesome applications using Flutter will be available each day. Whenever you build an awesome dart package that could save time and effort from other developers, **consider making your package publicly available!**
*Appreciate the lessons taught by [@letsgetwckd](https://twitter.com/letsgetwckd) on his [Dart course](https://www.youtube.com/watch?v=uZvoTCSsfjo&list=PLptHs0ZDJKt_fLp8ImPQVc1obUJKDSQL7&ab_channel=Flutterly) for helping me understand even more the concepts explained here.*
Thanks for reading!
![](https://cdn-images-1.medium.com/max/800/1*KzRW1rw8pTBTPU4llLRyzg.gif)

