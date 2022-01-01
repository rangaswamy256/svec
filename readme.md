### Front-end Technologies
- HTML
- CSS
- JavaScript
- BootStrap framework
- Angular Framework
- ReactJs
###  Back-end Technologies
- Node.js
       - express.js
       - nodemoon
       - cors
       - dotenv
- PHP  
- C#
- Java
- Python
###  Databases
- MongoDb
- Mysql
- SQlite
- Firebase
- PostgresSQL
- Oracle
- VCS or(Source code management)
      - Distibuted VCS  
            - Git,Mecurial
      - Remote (Central) VCS
            - Github, BitBucket
      - 
- git init
- git add filename
- git add filename1 filename5 filename100
- git add . or git add -all
- git status
### HTML(version5)
- Hyper text markup language
- Symantic elements
     - header
     - section
     - article
     - aside
     - footer
     - table 
- Block level elements 
     - h1 to h6
     - p
     - div
     - all semantic elements
     - Text will start from new line
- inline elements
     - span
     - img
     - a
     - nav
     - form
     - input
     - text area
     - legend
     - sup
     - sub
     - sub
     ### CSS
     - types of css
        -  Inline CSS
        - Internal Css
        - External CSS


   + Syntax ofCSS{
         css properties
   }

   ### Selectors
   + Simple selectors
       - By element name
       - Grouping selector(,)
       - Class selector
       - Id selector
   + Combinators
     + descendent selector ( )
     + Child selector(>)
     + Adjase\cent sibling selector(+)
     + General sibling selector(~)
   + pseudo class selector
   + pseudo element selector
   + Attribute selector


### Media Queries
- Extra small devices(mobiles)
   - max width:600px
- small  devices(larrge phones)
   - min width:600px
- medium devices(small laptops)
   - min width:768px
- large devices(large laptops and desktops)
   - min width:992px
- extra large devices()
   - min width:1200px

.....

@media only screen (min-width:320px)and(max-width:500px{
    css code
}
.....

  ### nav element with responsive
  - 
  ### Booststrap4.6


  - it is a CSS framework
  - 
 task 3
 - navbar with responsive

 - module(collection of functions and classes )
 - package (collection of module)
 - library (collection of packages)
 - framework (collection of library)
 - module--->package ---->library ---->Framework


 - types of Modes
     -  offline
     -  online
         - CDN links
+ back_ground-color-bg
+ text-white
### margin in BOotstrap(m-* ( 0-5))
      - 0 --> 0rem
      - 1 ---> 0.25rem (4px)
      -  2 --> 0.5rem
      -  3 --> 1rem
      - 4 --> 1.5rem
      - 5 --> 3rem
           m(margin in all directions)
           mt (margin in top)
           ml (margin in left)
           mb (margin in bottom)
           mr (margin in right)
- ml
- mt
+ padding (padding-left--->p1-5)


+ colors
     - primary
     - secondary
     - info
     - success
     - warning
     - danger
     - light
     - dark
     - white


+ we can use the colors for classes
     - Buttons (btn btn-primary)
     - text (text-white)
     - background (bg-secondary)
     - alerts (alert alert-primary)
+ Grid System
   - col-sm-12
     - sm(Small devices)
     - md (medium devices)
     - lg (large devices)
     - xl (Extra large devices)


### javaScript
 
  + in 1995 " Brenden Eich " introduced java Script(ES-262)
  + loosely coupled and Dynamic language
  + it is a text based programming language and we can run in client-side and
     server-side(Node.js) for dynamic web applications
  - ECMA-script (ES-6)
    - let & constant
    - map()
    - arrow function
    - classes
    - spread operator
    rest parameter
  + Datatypes
     - Number
     - BigINt(2^53-1)
     - String
     - Boolean
     - undefined
     - null
     - object
     - Arrays

+ Variables
  - var,let & const
  - scope
     - functional level --->var
     - block level --> let & const
  - Readfine ----->var, let
  - Redeclare
+ typeof()
+ object
..........
{
    name:"Ranga"
}
...........

+ Arrays


+ To generate Notifications
  - alert
  - prompt(to take input from user)
  - confirm

+ console statement
  - console.log()
  - console.info()
  - console.warn()
  - console.error()

+ spread operator

   .......

        ...variablename

   .......


+ Rest parameter
  + to handle the function parameters
  ..........

      ...parameter

   .........

+ Destructuring of Array & objects


  + Functions
    
    - function with functionname

   ..............
      function demo(x,y){
         return x+y
      }
      demo()
   ................

       - Annanymous function
       ......
       let demo function(x,y)
       {
          return x+y
       }

       - Arrow function
       ........
       let demo= (x,y) =>{
      return x/y
      }
      .........
      + for in
        -TO get the index of the elements
      + for of
        - To get the element values
      + for each()--->(ES-5)
      + map()---->(ES-6)
   

   ###  DOM

      - Document Object Model
      - document
      - history
      - window
      - navigator

   + DOM methods

     - getElementById()
     - getElementsByClassName()
     - querySelector()
     - getElementsByName()
     - getElementsByTagNameNS()
     - getSelection()
     - innerText()
     - appendChild()
     - textContent()
     - innerHTML
     - setAttribute()
     - classList
     - style
     - src


### JSON
  - java script object notation
  - To exchange we used information between application and server
  

  .........
  {
     "name":"Ranga"
     "age":20
     "salary": "6.3LPA"
     "designation":"MAIN DEVELOPER"
     "mobile":67865453232
  }
  ...............

  + Ajax call or promisses(fetch API) or axios




  ### ReactJs


  + it is a library
  + it follows component base architecture
      - functional Component
      - class Component
      - Pure Component
      - Higher order Component
  + It provides Vertual DOM
  + It provides Vertual jsx(Javascript and XML)
  + Unidirectional data flow
  + Single page Application


  + Props

    - To pass data from one component to another component we will use props
    - props are immutable


   + Union Bank(Functional)
       - Andhra Bank(Functional)
       - Corporation Bank(Class) 


  + Project Environment setup
     - [downloadVisualStudioCode](https://code.visualstudio.com/download)
     - [Download Nodejs](https://nodejs.org/en/download/)
     - install nodeJs and check version of 'node' and 'npm'
          - 'node -v'
          - 'npm -v '
     - 'webpack' and 'label'
     - Create-react-app
          - 'npm' install create-react-app'
          - 'create-react-app projectname'
     - 'npx create-react-app appname'


+ Index.html
+ index.js
+ App.js
   + Index page
     - nav.js
     - body.js
     - footer.js
     
    + Home.js
      - nav
      - body
      - footer
    + login.js
    + Register
    + About
    + Contact 

+  States

  - In react to maintain information we will use  States
  - we can maintain states in class component only (before react16.8 version)
  - to take State in react . Try to create constructor above render method and inside of class component
  - use 'rconst'  snippet
  ..........
    constructor(){
       super();
       this.state={

       }
    }
   .............

   - to update the state information to the class component we use "setState()" method
   - to update the information in class class componene we hve to follow component life cycle methods
   - componentWillRecieveProps()
   - componentWillMount()
   - componentDidMount()
   
   - shouldComponentUpdate()
   - componentWillUpdate()
   - componentDidUpdate()
   - componentWillUnmount()
   - componentWil()

   #### Hooks---> for data manupulation
    
     - from react 16.8 version Hooks are introduced

      - To maintain the information we can use Hooks
     - parent - child1 ---> child2 -->child3
     - useState()
     - useEffect()
     - useMemo()
     - useRef()
     - useContext()


### list Rendering



### Event Handling & Form Handling
     
   
- onSubmit()
- onChange()
- preventDefault()


####  Routing in React

      + To navigate (Route) from one component to another
           - install "react-router-dom" package by using "npm install react-router-dom"
           - BrowserRouter 
           - Routes
           - Route
           - Link
           - path
           - element
      

   + Redux 

 
   
           


### Reference links

   - [Flaticon]
   - [SVG Icons]
   