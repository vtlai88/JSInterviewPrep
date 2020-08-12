switch(process.argv[2]) {
    case '1.1':
      // IFFY function practice
      // 1)
      (function (data) {
        // logic here
        this.ex = data;
        (function (data3) {
          // logic here
          console.log(data3, this.ex, ex2)
        })(this);
      })(123);
      // Output:
      // Uncaught ReferenceError: ex2 is not defined
    break;
    case '1.2':
      // 2.1)
      var ex2 = "thad";
      // 2.2)
      (function helloWorld(data) {
        ex2 = "thad123"
        // logic here
        this.ex = data;
        (function (data3) {
          // logic here
          console.log(data3, this.ex, ex2)
        })(this);
      }(123));
      //Output: 
      //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …} 123 "thad123"
    break;
    case '1.3':
      // 2.1)
      var ex2 = "thad";
      // 2.2)
      (function helloWorld(data) {
        ex2 = "thad123"
        // logic here
        this.ex = data;
        (function (data3) {
          // logic here
          console.log(data3, this.ex, ex2)
        })(this);
      }(123));
      //Output: 
      //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …} 123 "thad123"
      // 3)
      helloWorld(123)
      // Output: 
      //VM462:1 Uncaught ReferenceError: helloWorld is not defined
    break;
    case '1.4':
      var ex2 = "thad";
      // 4)
      ((data) => {
        ex2 = "thad123"
        // logic here
        this.ex = data;
        (function (data3) {
          // logic here
          console.log(data3, this.ex, ex2)
        })(this);
      })(123);
    // Output: 
    //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …} 123 "thad123"
    break;
    case '2':
      // class vs function
      class HelloClass {
        constructor(a, b) {
          this.a = a;
          this.b = b;
        }
        static add(){
          console.log(this.a + this.b)
        }
        addNonStatic(){
          console.log(this.a + this.b)
        }
      }
      function HelloFunction(a, b){
        this.a = a;
        this.b = b;
        this.addNonStatic = function(){
          console.log(this.a + this.b);
        }
      }
      HelloFunction.add = function(){
        console.log(this.a + this.b);
      };
      //static method route
      HelloClass.a = 'hai';
      HelloClass.b = 'bai';
      HelloClass.add();
      HelloFunction.a = 'hai';
      HelloFunction.b = 'bai';
      HelloFunction.add();
      // non-static route
      var classy = new HelloClass('hai','bai')
      classy.addNonStatic();
      var functy = new HelloFunction('hai','bai')
      functy.addNonStatic();
    break;
    case '6':
      // Promise chaining and error handling (since the promises can finish at different times, all the output is at the bottom)
      // example 1 - happy path, ends by being caught in the second callback of the .then
      new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
      }).then(function(result) {
        console.log(result); // 1
        return new Promise((resolve, reject) => { // (*)
          setTimeout(() => resolve(result * 2), 1000);
        });
      }).then(function(result) { // (**)
        console.log(result); // 2
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(result * 2), 1000);
        });
      }).then(function(result) {
        console.log(result); // 4
        return result * 2;
      }).then(function(result) {
        console.log(result); // 8
        return new Promise((resolve, reject) => {
          setTimeout(() => reject(result * 2), 1000);
        });
      }).then(function(result) {
      }, function(err){
        console.log(`Example 1: In the error callback: ${err}`);
      }).then(function(result) {
      }).catch(err=>console.log(`the error was ${err}`));
      // example 2 with reject and no second callback in the .then  
      new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
      }).then(function(result) {
        console.log(result); // 8
        return new Promise((resolve, reject) => {
          setTimeout(() => reject(result * 2), 1000);
        });
      }).then(function(result) {
      }).catch(err=>console.log(`in example 2: the error was ${err}`));
      // example 3 with throw
      new Promise(function(resolve, reject) {
        throw('big error')
      }).then(function(result) {
      console.log(`in success ${result}`)
      },function(result) {
        console.log(`In example 3: in error ${result}`)
      }).catch(err=>console.log(`In example 3: the error was ${err}`));
      // Output: 
      // In example 3: in error big error
      // 1
      // 1
      // 2
      // in example 2: the error was 2
      // 4
      // 8
      // Example 1: In the error callback: 16
    break;
    case '7':
      async function f() {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => reject("done!"), 5000)
        });
        try {
          let response = await promise;
        } catch(err) {
          console.log(err); // TypeError: failed to fetch
        }
      }
      f();
    break;
    case '10.1':
        function test() {
            try {
                foo(); // TypeError "foo is not a function"
            } catch(e) {
                console.log(e);
            }
            bar(); // "this will run!"
            var foo = function () { // function expression assigned to local variable 'foo'
                console.log("this won't run!");
            }
            function bar() { // function declaration, given the name 'bar'
                console.log("this will run!");
            }
        }
        test();
    break;
    case '10.2':
        console.log(y);
        y = 1;
    break;
    case '10.3':
        console.log(z);
        var z = 2;
    break;
    case '10.4':
        q = 3;
        console.log(q);
        var q;
    break;
    case '10.5':
        w= 3;
        console.log(w);
        let w;
    break;
    case '10.6':
        e = 3;
        console.log(e);
        const e=6;
    break;
    case '11.1':
      // this keyword example 1!
      // if a function is part of object => called method
      // if function is not  part of object => references to global objects (window (in browser), global (in node))

      const video = {
        title: 'a',
        play() {
            console.log(this);
        }
      };

      video.stop = function() {
        console.log(this);
      };

      video.stop();

      //will see video object that has stop and play methods
    break;
    case '11.2':
      // this keyword example 2!

      video = {
        title: 'a',
        play() {
          console.log(this);
        }
      };

      function video(title) {
        this.title  = title;
        console.log(this);
      }

      video('b');

      //line 33 creates new object with title b, which is used in playVideo function
    break;
    case '11.3':
      // this keyword example 3!

      const video = {
        title: 'a',
        play() {
          console.log(this.title);
        }   
      };
      video.play();
    
      function playVideo() {
          console.log(this);
      };
    
      playVideo();
    
      //will get the global object in node
      //(global, function not part of an object)
    break;
    case '11.4':
      // closures example 1!

      let myName = "Valentina"

      function printName() {
        console.log(myName)
      }
      myName = "Joey"
      printName() 
      myName = "April"
      printName()

      //will print Valentina
      //however with the changes, it will print the most recent myName variable

    break;
    case '11.5':
      // closures example 2!

      function outer(outerVar){
        const outer2 = "hello"
        return function inner(innerVar){
          console.log('Outer Variable: ' + outerVar)
          console.log('Inner Variable: ' + innerVar)
          console.log(outer2)
        }
      }

      const newFunction = outer("outside")
      newFunction("inside")

      // the inner function has access to the variables used in the outer function (outerVariable and outer2)
      // in JS, anything on the inside has access to anything on the outside

    break;
    case '11.6':
      // closures example 3!

      function outerFunction(url) {
        fetch(url).then(() => {
          console.log(url)
        })
      }
    
    const newFunction = outerFunction('outside')
    newFunction('inner')
    
    //also can be seen in promises
    //url is the outer function variable but the inner arrow function also has access to it

    break;
    case '12.1':
      // .apply() & .call()

      const book = {
        title: 'Brave New World',
        author: 'Aldous Huxley',
      }
      function summary() {
        console.log(`${this.title} was written by ${this.author}.`)
      }
      
      summary.call(book)
      summary.apply(book)

      //The only difference between call and apply is that call requires the arguments to be passed in one-by-one, and apply takes the arguments as an array.

    break;
    case '12.2':
      // .bind()

      const module = {
        x: 42,
        getX: function() {
          return this.x;
        }
      };
      
      const unboundGetX = module.getX;
      console.log(unboundGetX()); // The function gets invoked at the global scope
      // expected output: undefined
      
      const boundGetX = unboundGetX.bind(module);
      console.log(boundGetX());
      // expected output: 42

      //check out this link for difference between .bind() & .call()/.apply()
      //https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind#:~:text=useful%20in%20events.-,Use%20.,for%20calling%20the%20original%20function
      
    break;
    case '13':
      // .eval()

      document.write('<button>click here</button>')
      document.write('<button onclick="alert(\"hello world \")">click here</button>')

      //now we will try evaling tester function
      document.write('<button onclick="tester()">click here</button>')
      eval("function tester(){alert(\'hello\')}")
   
      document.write('<button onclick="tester2()">click here</button>')
      eval("function tester2(){alert(\'goodbye\')}")

      document.write("<script></script>")
  
      document.write('<button onclick="tester3()">click here</button>')
  
      document.write("<script>function tester3(){alert(\'popcorn\')}</script>")

    break;

  }
