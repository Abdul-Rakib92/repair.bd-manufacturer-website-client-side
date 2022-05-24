import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold m-10">
        1.How will you improve the performance of a React Application?
      </h2>

      <p className="text-xl m-10">
        1.Where necessary keeping component state local.
        <br />
        2.Prevent unnecessary re-renders to memorizing React components.
        <br />
        3.In React code-splitting using dynamic import()
        <br />
        4.List virtualization or Windowing in React.
        <br />
        5.Lazy loading images in React.
      </p>

      <h2 className="text-2xl font-bold m-10">
        2.What are the different ways to manage a state in a React application?
      </h2>

      <p className="text-xl m-10">
        It has been proven that React application can be structured into 5 types
        of state. Each type of state follows a set of defined rules. Based on
        these rules of each state, you can easily store data as per your needs.
        <br />
        1 . Communication State
        <br />
        2. Data State
        <br />
        3. Control State
        <br />
        4. Session State
        <br />
        5. Location State
      </p>

      <h2 className="text-2xl font-bold m-10">
        3.How does prototypical inheritance work?
      </h2>

      <p className="text-xl m-10">
        Every object, along with its methods and attributes, has a secret
        internal property called [[Prototype]]. Prototypal inheritance is a
        javascript feature that allows you to add methods and attributes to
        objects. It's a technique that allows one object to inherit the
        attributes and methods of another.
      </p>

      <h2 className="text-2xl font-bold m-10">
        4.Why you do not set the state directly in React? For example, if you
        have const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h2>

      <p className="text-xl m-10">
        Because of the following reasons, one should never set the state
        directly:
        <br />
        1.If you set it directly, invoking setState() thereafter could merely
        overwrite your previous set.
        <br />
        2.When you set the state directly, it does not instantly modify
        this. state Instead, it generates a pending state transition, which will
        only yield the current value if accessed after using this function.
        <br />
        3.You'll lose control of the state in all of your components.
      </p>

      <h2 className="text-2xl font-bold m-10">
        5.What is a unit test? Why should write unit tests?
      </h2>

      <p className="text-xl m-10">
        Unit testing is a software development technique in which the smallest
        testable pieces of a program, referred to as units, are examined
        separately and independently for correct functioning.
      </p>

      <p className="text-xl m-10">
        Before code is deployed, unit testing verifies that it fulfills quality
        criteria. This promotes a stable engineering environment that
        prioritizes quality. Unit testing saves time and money across the
        product development life cycle, and it helps developers produce better
        code faster.
      </p>
    </div>
  );
};

export default Blog;
