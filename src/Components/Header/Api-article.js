import "./api-article.css"
import ReactPlayer from 'react-player'


import React from 'react';

const ApiArticle = () => {
    return (
        <div className="article-body text-start ">
            <h1>What is (API)?</h1>
            <p>Api stands for Application Programming Interface.
                Its is a set of commands , function, protocols and Objects <br />
                That programmers can use to create Softwares or interact with an external systems.<br />
            </p>
            <div className="first-img text-center">
                <img src="https://hurayin.com/assets/images/api.png" alt="api pictures" />
            </div>
            <h2>What Are the Different Types of APIs?</h2>
            <p>There are four principal types of API commonly used in web-based applications: public, internal, private and composite. </p>
            <ul>
                <li> <strong>Public API</strong>: These are available to developers and other users with minimal restrictions. <br />
                    They may require registration, and use of an API key, or maybe completely open. <br />
                    They are intended for external users (developers at other companies, for example) to access data or services. <br />
                    Any developer can access it, without even registering, allowing app builders to include the given data in their own applications.</li>
                <li>
                    <strong>Internal API</strong>: these are designed to be hidden from external users. They are used within a company to share resources.<br />
                    They allow different teams or sections of a business to utilize each other’s tools, data, and programs. <br />
                    Using internal APIs has several advantages over conventional integration techniques, <br />
                    including security and access control, an audit trail of system access, and a standard interface for connecting multiple services.
                </li>
                <li><strong>Partner API</strong>:technically similar to open APIs, but they feature restricted access, often controlled through a third-party API gateway. <br />
                    They are usually intended for a specific purpose, such as providing access to a paid-for service. <br />
                    This is a very common pattern in software as a service ecosystem. <br />
                </li>
                <li><strong>Composite API</strong>:These allow developers to access several endpoints in one call.<br />
                    These could be different endpoints of a single API, or they could be multiple services or data sources. <br />
                    Composite APIs are especially useful in microservice architectures, where a user may need information from several services to perform a single task.
                </li>


            </ul>

            <h2>APIs in our everyday life</h2>
            <p>Said like this it may seem like something that is very distant from our daily life,<br />
                but in reality it is not like that.<br />
                In everyday life our phones, computers, tablets, etc. constantly use Apis, an example?<br />
                Phone clock, weather, Netflix, Spotify and so on.
            </p>
            <div className="first-img text-center">
                <img src="https://www.appleute.de/wp-content/uploads/2021/05/api-removebg-preview-min.png" alt="everyday-life used api" />
            </div>
            <p>Apis act as the coordinator for binding software component communication via sets of definitions and protocols .<br />
                For example, when you are checking the weather on your phone ,there is a central office that has the data .<br />
                Your Phone communicates to the system via Apis and constantly shows you the actual temperature and clima condition.<br />
            </p>

            <h2> What is an API endpoint and why is it important?</h2>
            <p>When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. <br/>
             Each endpoint is the location from which APIs can access the resources they need to carry out their function. APIs work using 'requests' and 'responses.'
            <br/>When an API requests information from a web application or web server, it will receive a response. The place that APIs send requests and where the resource lives, is called an endpoint.<br/>

                API endpoints are really important for two main reasons: </p>
            <ol>
                <li><strong>Security</strong>:API endpoints make the system vulnerable to attack. API monitoring is crucial for preventing misuse.</li>
                <li><strong>Performance</strong>:API endpoints, especially high traffic ones, can cause bottlenecks and affect system performance.</li>
            </ol>


           
            <div className=" video-player text-center">
            
                <ReactPlayer url="https://www.youtube.com/watch?v=GZvSYJDk-us&t=155s" />
                <div className="text-video-player">
                <h5>If you want know more about Api I really recommend this accurate YouTube video from FreeCodeCamp.</h5>
                <p><em>Source FreeCodeCamp</em></p></div>
            </div>
<div className="list-apis">
<h2>10 Most Popular used API in (2022)</h2>
            <p>As I mentioned before APIs are really used a lot.
                Let 's see the list of the 10 most used of 2002 .
            </p>
            <ol>
                <li><a href="https://rapidapi.com/3b-data-3b-data-default/api/skyscanner44/">Skyscanner Flight Search</a></li>
                <li><a href="https://rapidapi.com/collection/top-weather-apis">Open Weather Map </a></li>
                <li><a href="https://rapidapi.com/api-sports/api/api-football">API-FOOTBALL</a></li>
                <li><a href="https://rapidapi.com/thecocktaildb/api/the-cocktail-db">The Cocktail DB </a></li>
                <li><a href="https://rapidapi.com/apilayernet/api/rest-countries-v1">REST Countries v1 </a></li>
                <li><a href="https://rapidapi.com/collection/stock-market-apis">Yahoo Finance</a></li>
                <li><a href="https://rapidapi.com/ajith/api/love-calculator">Love Calculator </a></li>
                <li><a href="https://rapidapi.com/BigLobster/api/url-shortener-service">URL Shortener Service </a></li>
                <li><a href="https://rapidapi.com/search/space">NasaAPI</a></li>
                <li><a href="https://rapidapi.com/divad12/api/numbers-1">Numbers </a></li>
            </ol>

</div>
           
        </div>
    );
}

export default ApiArticle;
