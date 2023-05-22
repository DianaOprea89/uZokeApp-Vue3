Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data.
All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.
There are two core features of Vue:

* Declarative Rendering: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.

* Reactivity: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.




Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:

    *Enhancing static HTML without a build step
    *Embedding as Web Components on any page
    *Single-Page Application (SPA)
    *Fullstack / Server-Side Rendering (SSR)
    *Jamstack / Static Site Generation (SSG)
    *Targeting desktop, mobile, WebGL, and even the terminal


In most build-tool-enabled Vue projects, we author Vue components using an HTML-like file format called Single-File Component (also known as *.vue files, abbreviated as SFC). A Vue SFC, as the name suggests, encapsulates the component's logic (JavaScript), template (HTML), and styles (CSS) in a single file.

API Styles
Vue components can be authored in two different API styles: Options API and Composition API.

    * With Options API, we define a component's logic using an object of options such as data, methods, and mounted. Properties defined by options are exposed on this inside functions, which points to the component instance.
    * With Composition API, we define a component's logic using imported API functions. In SFCs, Composition API is typically used with <script setup>. The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate. For example, imports and top-level variables / functions declared in <script setup> are directly usable in the template.

Both API styles are fully capable of covering common use cases. They are different interfaces powered by the exact same underlying system. In fact, the Options API is implemented on top of the Composition API! The fundamental concepts and knowledge about Vue are shared across the two styles.
The Options API is centered around the concept of a "component instance" (this as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.
The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity. It is more free-form and requires an understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.


This project is created using Composition API, and it can be checked under directory src, there we have the main.js file and the App.vue . that is the "root component", and the nested and reusable components are under  directories views and components, the data files are under data directory and also this was done using vue-router, and we can find the routing rules under directory router
