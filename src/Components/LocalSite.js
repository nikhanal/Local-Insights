import React from "react";
import Navbar from "./Navbar";
import "./localsite.css";
import Card from "./Card";
import { ButtonOutlined } from "./Buttons/Button";
import Showguide from "./Showguide";

function LocalSite() {
  const [showdialog, setShowdialog] = React.useState(false);
  const handleclick = () => {
    console.log("hello");
    setShowdialog(true);
  };
  const closedialog = () => {
    setShowdialog(false);
  };
  return (
    <>
      <Navbar />
      <div className="localsite">
        <Showguide opendialog={showdialog} closedialogbox={closedialog} />
        <header className="localsite-title">
          <h1>Pimbahal</h1>
          {/* <button onClick={handleclick}>Book a guide</button> */}
          <ButtonOutlined
            btntitle="Book a guide"
            onRegister={handleclick}
          ></ButtonOutlined>
          {/* <ButtonOutlined btntitle="Book a guide" onRegister={handleclick} /> */}
        </header>
        <section className="localsite-info">
          <p>
            There are various legends concerning how the pond was built. One
            says that around the 14th century, Pimbahal was just empty ground.
            During the day, it was an active place but at night, it was said to
            be wandered by Lakheys, a type of demon in Nepalese folklore.
            Lakheys would come every night and make loud noises, break into
            homes, scare children and cause a disturbance in the area. Local
            resident Gaya Baje became annoyed by their acts, so he used his
            magical powers to control them and made them dig a pond at Pimbahal
            because "as long as the ground existed, the Lakheys would keep
            coming". According to another legend, Lakhey's wife had to travel
            far away to get water during wintertime because the taps would run
            dry. There were no ponds in Lalitpur during that time and, not
            wanting to see his wife have to walk far, the demon built the
            Pimbahal Pond in one night.
          </p>
          <div>
            <img src="https://pbs.twimg.com/media/Dl7znbQV4AADmr8.jpg" />
          </div>
        </section>
        <section className="upcomingevents">
          <h2>Upcoming Events</h2>
          <div class="events">
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kartik_Naach_%2847173446421%29.jpg/440px-Kartik_Naach_%2847173446421%29.jpg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>AUG</h2>
                  <h2 bold>21</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>5PM - 9PM</h6>
                    <h2 bold>Kartik Naach</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kartik_Naach_%2847173446421%29.jpg/440px-Kartik_Naach_%2847173446421%29.jpg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>AUG</h2>
                  <h2 bold>21</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>5PM - 9PM</h6>
                    <h2 bold>Kartik Naach</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kartik_Naach_%2847173446421%29.jpg/440px-Kartik_Naach_%2847173446421%29.jpg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>AUG</h2>
                  <h2 bold>21</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>5PM - 9PM</h6>
                    <h2 bold>Kartik Naach</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kartik_Naach_%2847173446421%29.jpg/440px-Kartik_Naach_%2847173446421%29.jpg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>AUG</h2>
                  <h2 bold>21</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>5PM - 9PM</h6>
                    <h2 bold>Kartik Naach</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Local Food</h2>
          <div className="food">
            <Card
              name="Kothey Momo"
              district="Pimbahal"
              image="https://imgs.search.brave.com/fdb_9LgqWXsgeyA5im6cKKABH4mNg3md3WnH10Varec/rs:fit:1000:667:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0tZTBVNklseVVn/NC9VWk1SbExoaUVM/SS9BQUFBQUFBQUJ1/dy9pUU14REVnejJD/dy9zMTYwMC9LT1RI/RVkrTU9NTy5qcGc"
            />
            <Card
              name="Kothey Momo"
              district="Pimbahal"
              image="https://imgs.search.brave.com/fdb_9LgqWXsgeyA5im6cKKABH4mNg3md3WnH10Varec/rs:fit:1000:667:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0tZTBVNklseVVn/NC9VWk1SbExoaUVM/SS9BQUFBQUFBQUJ1/dy9pUU14REVnejJD/dy9zMTYwMC9LT1RI/RVkrTU9NTy5qcGc"
            />
            <Card
              name="Kothey Momo"
              district="Pimbahal"
              image="https://imgs.search.brave.com/fdb_9LgqWXsgeyA5im6cKKABH4mNg3md3WnH10Varec/rs:fit:1000:667:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0tZTBVNklseVVn/NC9VWk1SbExoaUVM/SS9BQUFBQUFBQUJ1/dy9pUU14REVnejJD/dy9zMTYwMC9LT1RI/RVkrTU9NTy5qcGc"
            />
            <Card
              name="Kothey Momo"
              district="Pimbahal"
              image="https://imgs.search.brave.com/fdb_9LgqWXsgeyA5im6cKKABH4mNg3md3WnH10Varec/rs:fit:1000:667:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0tZTBVNklseVVn/NC9VWk1SbExoaUVM/SS9BQUFBQUFBQUJ1/dy9pUU14REVnejJD/dy9zMTYwMC9LT1RI/RVkrTU9NTy5qcGc"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default LocalSite;
