import React, { useEffect, useState,useRef } from "react";

export default function JSONart() {

return(
    <>
<p>JSON, or JavaScript Object Notation, is a format used to represent data.
It was introduced in the early 2000s as part of JavaScript and gradually expanded to become the most common medium for describing and exchanging text-based data.
Today, JSON is the universal standard of data exchange. It is found in every area of programming, including front-end and server-side development, systems, middleware, and databases.
</p>


<p>
JSON was initially developed as a format for communicating between JavaScript clients and back-end servers. 
It quickly gained popularity as a human-readable format that front-end programmers could use to communicate with the back end using a terse, standardized format.
Developers also discovered that JSON was very flexible: you could add, remove, and update fields ad hoc.(That flexibility came at the cost of safety, which was later addressed with the JSON schema.)</p>

In a curious turn, JSON was popularized by the AJAX revolution.Strange, given the emphasis on XML, but it was JSON that made AJAX really shine.
Using REST as the convention for APIs and JSON as the medium for exchange proved a potent combination for balancing simplicity, flexibility, and consistency.

Next, JSON spread from front-end JavaScript to client-server communication, and from there to system config files, back-end languages, and all the way to databases.
 JSON even helped spur the NoSQL movement that revolutionized data storage.It turned out that database administrators also enjoyed JSON's flexibility and ease of programming.

Today, document-oriented data stores like MongoDB provide an API that works with JSON-like data structures.
In an interview in early 2022, MongoDB CTO Mark Porter noted that, from his perspective, JSON is still pushing the frontier of data.  Not bad for a data format that started with a humble curly brace and a colon.

No matter what type of program or use case they're working on, software developers need a way to describe and exchange data. This need is found in databases, business logic, user interfaces, and in all systems communication.
There are many approaches to structuring data for exchange.The two broad camps are binary and text-based data.JSON is a text-based format, so it is readable by both people and machines.

JSON is a wildly successful way of formatting data for several reasons.First, it's native to JavaScript, and it's used inside of JavaScript programs as JSON literals. 
You can also use JSON with other programming languages, so it's useful for data exchange between heterogeneous systems.Finally, it is human readable. 
For a language data structure, JSON is an incredibly versatile tool. It is also fairly painless to use, especially when compared to other formats. 
 {  { 
username: "Sylvester Stallone",
password: zrtjef6934k}
 }

Everything inside of the braces or squiggly brackets  {`({...})`}  belongs to the same object.An object, in this case, refers in the most general sense to a “single thing." Inside the braces are the properties that belong to the thing.
Each property has two parts: a name and a value, separated by a colon.These are known as the keys and values.In Listing 1, "username" is a key and "Silvester Stallone" is a value.

The key takeaway here is that JSON does everything necessary to handle the need—in this case, holding the information in the form—without a lot of extra information. You can glance at this JSON file and understand it. 
That is why we say that JSON is concise. Conciseness also makes JSON an excellent format for sending over the wire.

JSON was created as an alternative to XML, which was once the dominant format for data exchange.
XML is hard to read and leaves much to be desired in terms of coding agility. JSON was created to resolve these issues. It's no wonder it has more or less supplanted XML.

Two data formats sometimes compared to JSON are YAML and CSV.The two formats are on opposite ends of the temporal spectrum.
CSV is an ancient, pre-digital format that eventually found its way to being used in computers.YAML was inspired by JSON and is something of its conceptual descendant.

CSV is a simple list of values, with each entry denoted by a comma or other separator character, with an optional first row of header fields.It is rather limited as a medium of exchange and programming structure, but it is still useful for outputting large amounts of data to disk. And, of course, CSV's organization of tabular data is perfect for things like spreadsheets.

YAML is actually a superset of JSON, meaning it will support anything JSON supports.But YAML also supports a more stripped-down syntax, intended to be even more concise than JSON. 
For example, YAML uses indentation for hierarchy, forgoing the braces.Although YML is sometimes used as a data exchange format, its biggest use case is in configuration files.

So far, you've only seen examples of JSON used with shallow (or simple) objects.
That just means every field on the object holds the value of a primitive.
JSON is also capable of modeling arbitrary complex data structures such as object graphs and cyclic graphs—that is, structures with circular references. 

JSON with nested objects

{`
let merry = { name: "Merry",
  bestfriend: {
    name: "Pippin"
  }
}`}

The bestfriend property in  to another object, which is defined inline as a JSON literal.

JSON with object references

{`
let merry = { race: "hobbit", name: “Merry Brandybuck” }
let pippin = {race: "hobbit", name: “Pippin Took”, bestfriend: merry }
console.log(JSON.stringify(pippin.bestfriend.name));`} // outputs “Merry Brandybuck”


JSON with arrays

{`
{
  towns: [ “The Shire”, “Rivendale”, “Gondor” ]
}`}

Of course, arrays may hold references to other objects, as well.With these two structures, JSON can model any range of complex object relations.
Summary of JSON value types

So far you've seen strings, objects, and arrays as value types.Additional value types for JSON properties are string, number, object, array, true, false, and null.

Parsing and generating JSON means reading it and creating it, respectively.You’ve seen JSON.stringify() in action already.
That is the built-in mechanism for JavaScript programs to take an in-memory object representation and turn it into a JSON string.
To go in the other direction—that is, take a JSON string and turn it into an in-memory object—you use JSON.parse().

In most other languages, it’s necessary to use a third-party library for parsing and generating.
 For example, in Java there are numerous libraries, but the most popular are Jackson and GSON.
These libraries are more complex than stringify and parse in JavaScript, but they also offer advanced capabilities such as mapping to and from custom types and dealing with other data formats.

In JavaScript, it is common to send and receive JSON to servers.For example with the built in fetch() API.
  

{`
fetch('https://the-one-api.dev/v2/character')
  .then((response) => response.json())
  .then((data) => console.log(data));
`}
Once you turn JSON into an in-memory data structure, be it JavaScript or another language, you can employ the APIs for manipulating the structure. For example, in JavaScript, the JSON parsed in Listing 7 would be accessed like any other JavaScript object—perhaps by looping through data.keys or accessing known properties on the data object.
JWTs

Authentication is another area where JSON is used. Developers and others use JSON web tokens, or JWTs, to communicate authentication claims. JWTs have a standard, compact format and are cryptographically signed to prevent tampering. They can also be encrypted for secrecy.
JSON schema and JSON formatter

JavaScript and JSON are incredibly flexible, but sometimes you need more structure than they provide. In a language like Java, strong typing and abstract types (like interfaces) help structure large-scale programs. In SQL stores, a schema provides a similar structure. If you need more structure in your JSON documents, you can use JSON schema to explicitly define the characteristics of your JSON objects. Once defined, you can use the schema to validate object instances and ensure that they conform to the schema.

Another issue is dealing with machine-processed JSON that is minified and illegible. Fortunately, this problem is easy to solve. Just jump over to the JSON Formatter & Validator (I like this tool but there are others), paste in your JSON, and hit the Process button. You'll see a human-readable version that you can use. Most IDEs also have a built-in JavaScript formatter to format your JSON.
Using JSON with TypeScript

TypeScript allows for defining types and interfaces, so there are times when using JSON with TypeScript is useful. A class, like a schema, outlines the acceptable properties of an instance of a given type. In plain JavaScript there’s no way to restrict properties and their types. JavaScript classes are like suggestions; the programmer can set them now and modify the JSON later. A TypeScript class, however, enforces what properties the JSON can have and what types they can be.
Conclusion

JSON is one of the most essential technologies used in the modern software landscape. It is crucial to JavaScript but also used as a common mode of interaction between a wide range of technologies. Fortunately, the very thing that makes JSON so useful makes it relatively easy to understand. It is a concise and readable format for representing textual data.







</>
    )



}