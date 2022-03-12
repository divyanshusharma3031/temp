// import { stringify } from "nodemon/lib/utils";
import React from "react";
import { useEffect } from "react";
import "./Questions.css";
function Questions() {
  useEffect(async () => {
    getQuestions();
  }, []);
  const getQuestions = async () => {
    let id = document.getElementById("spinner");
    // id.style.display = "block";
    let response = await fetch(`http://localhost:4000/getquestions`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    response = await response.json();
    let c = 0;
    for (let i = 1; i <= 15; i++) {
      let idx = document.getElementById(`${i}${0}`);
      idx.innerHTML = i;
      let name = document.getElementById(`${i}${1}`);
      name.innerHTML = `${response.q800[c].name}`;
      let rating = document.getElementById(`${i}${3}`);
      rating.innerHTML = 800;
      let frequency = document.getElementById(`${i}${2}`);
      frequency.innerHTML = `${response.q800[c].submissions}`;
      let s = "";
      let tags = document.getElementById(`${i}${4}`);
      response.q800[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q800[c].tags.length-1) {
        } else {
          s += ", ";
        }
      });
      tags.innerHTML = s;
      c++;
    }
    // id.style.display = "none";
    console.log(response);
  };
  return (
    <>
      <div className="container">
        <div id="inner">
          <div id="innercontainer">
            <div class="list list1">
              <div class="elements0" id="00">
                Index
              </div>
              <div class="elements1" id="01">
                Problem
              </div>
              <div class="elements2" id="02">
                Frequency
              </div>
              <div class="elements3" id="03">
                Rating
              </div>
              <div class="elements4" id="04">
                Tags
              </div>
            </div>
            <div class="list">
              <div class="elements0" id="10"></div>
              <div class="elements1" id="11"></div>
              <div class="elements2" id="12"></div>
              <div class="elements3" id="13"></div>
              <div class="elements4" id="14"></div>
            </div>
            <div class="list">
              <div class="elements0" id="20"></div>
              <div class="elements1" id="21"></div>
              <div class="elements2" id="22"></div>
              <div class="elements3" id="23"></div>
              <div class="elements4" id="24"></div>
            </div>
            <div class="list">
              <div class="elements0" id="30"></div>
              <div class="elements1" id="31"></div>
              <div class="elements2" id="32"></div>
              <div class="elements3" id="33"></div>
              <div class="elements4" id="34"></div>
            </div>
            <div class="list">
              <div class="elements0" id="40"></div>
              <div class="elements1" id="41"></div>
              <div class="elements2" id="42"></div>
              <div class="elements3" id="43"></div>
              <div class="elements4" id="44"></div>
            </div>
            <div class="list">
              <div class="elements0" id="50"></div>
              <div class="elements1" id="51"></div>
              <div class="elements2" id="52"></div>
              <div class="elements3" id="53"></div>
              <div class="elements4" id="54"></div>
            </div>
            <div class="list">
              <div class="elements0" id="60"></div>
              <div class="elements1" id="61"></div>
              <div class="elements2" id="62"></div>
              <div class="elements3" id="63"></div>
              <div class="elements4" id="64"></div>
            </div>
            <div class="list">
              <div class="elements0" id="70"></div>
              <div class="elements1" id="71"></div>
              <div class="elements2" id="72"></div>
              <div class="elements3" id="73"></div>
              <div class="elements4" id="74"></div>
            </div>
            <div class="list">
              <div class="elements0" id="80"></div>
              <div class="elements1" id="81"></div>
              <div class="elements2" id="82"></div>
              <div class="elements3" id="83"></div>
              <div class="elements4" id="84"></div>
            </div>
            <div class="list">
              <div class="elements0" id="90"></div>
              <div class="elements1" id="91"></div>
              <div class="elements2" id="92"></div>
              <div class="elements3" id="93"></div>
              <div class="elements4" id="94"></div>
            </div>
            <div class="list">
              <div class="elements0" id="100"></div>
              <div class="elements1" id="101"></div>
              <div class="elements2" id="102"></div>
              <div class="elements3" id="103"></div>
              <div class="elements4" id="104"></div>
            </div>
            <div class="list">
              <div class="elements0" id="110"></div>
              <div class="elements1" id="111"></div>
              <div class="elements2" id="112"></div>
              <div class="elements3" id="113"></div>
              <div class="elements4" id="114"></div>
            </div>
            <div class="list">
              <div class="elements0" id="120"></div>
              <div class="elements1" id="121"></div>
              <div class="elements2" id="122"></div>
              <div class="elements3" id="123"></div>
              <div class="elements4" id="124"></div>
            </div>
            <div class="list">
              <div class="elements0" id="130"></div>
              <div class="elements1" id="131"></div>
              <div class="elements2" id="132"></div>
              <div class="elements3" id="133"></div>
              <div class="elements4" id="134"></div>
            </div>
            <div class="list">
              <div class="elements0" id="140"></div>
              <div class="elements1" id="141"></div>
              <div class="elements2" id="142"></div>
              <div class="elements3" id="143"></div>
              <div class="elements4" id="144"></div>
            </div>
            <div class="list">
              <div class="elements0" id="150"></div>
              <div class="elements1" id="151"></div>
              <div class="elements2" id="152"></div>
              <div class="elements3" id="153"></div>
              <div class="elements4" id="154"></div>
            </div>
            <div id="space">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
