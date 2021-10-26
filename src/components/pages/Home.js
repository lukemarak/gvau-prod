import React, { useState } from 'react';
import '../../css/Home.css';
import Library from '../videos/library.mp4';
import { Modal, Button } from 'react-bootstrap';


const Home = () => {
    const [aboutModal, setAboutModal] = useState(false);
    const [mvModal, setMvModal] = useState(false);
    const [evModal, setEvModal] = useState(false);

    return (
        <>
        <div className="showcase">
            <video playsInline autoPlay loop muted poster={Library}>
                <source src={Library} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="text">
                <h1>Never Stop</h1>
                <h3>Be happy, be energetic, be You, Think school, Think Grace Valley Academy.</h3>
                <p> A world of learners where children gain a passport to the world</p>
            </div> 
         </div>
         <div className="intro-section">
             <div className="left">
                <h1>Why GVA?</h1>
                <p>Education is a commitment to excellence in Teaching and Learning.</p>
                <Button className="btn btn-success" onClick={() => setAboutModal(true)}>More about us</Button>
             </div>
             <div className="divider"></div>
             <div className="middle">
                <h1>Mission & Vission</h1>
                <p>Our focus is to provide a stimulating early learning and child care experience which promotes each child’s social/emotional, physical and cognitive development.</p>
                <Button className="btn btn-success" onClick={() => setMvModal(true)}>Know more</Button>
             </div>
             <div className="divider"></div>
             <div className="right">
                 <h1>GVA Environment.</h1>
                 <p> The facilities of a school impact overall learning process as well as the mental and physical growth of the students.</p>
                 <Button className="btn btn-success" onClick={() => setEvModal(true)}>Know more</Button>
             </div>
         </div>
         <div className="container">
            <div className="whyBar">
                <h1>Upcomming Events</h1>
                <h1>Latest News</h1>
            </div>
         </div>
         {/* about us modals  */}
         <Modal
                size="lg"
                show={aboutModal}
                onHide={() => setAboutModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Know more about Grace Valley Academy.
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Learning Excellence?</h2>
                    <p>Education is a commitment to excellence in Teaching and Learning.</p>
                    <h1>Diversity, Community and Inclusion</h1>
                    <p>It is about academic excellence and cultural diversity.</p>
                    <p>Education is about an exemplary learning community.</p>
                    <p>Education is about helping students with learning differences.</p>
                    <h1>Christian</h1>
                    <p>Education is about forming faithful disciples of Jesus.</p>
                </Modal.Body>
            </Modal>
            {/* Our mission & Vission  */}
            <Modal
                size="lg"
                show={mvModal}
                onHide={() => setMvModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Mission & Vission.
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Our Mission</h2>
                    <p>Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning.</p>
                    <p>We foster our students’ love for learning, encourage them to try new and exciting things, and give them a solid foundation to build on</p>
                    <p>Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement</p>
                    <h2>Our Vission</h2>
                    <p>Our vision is to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated.</p>
                    <p>We aim to provide a safe learning environment with a welcoming atmosphere which creates a sense of belonging amongst the families. We maintain an inclusive environment which acknowledges and respects children from diverse family and cultural backgrounds</p>
                </Modal.Body>
            </Modal>
            {/* environment modal  */}
            <Modal
                size="lg"
                show={evModal}
                onHide={() => setEvModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Environment.
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Importance of School Facilities in Education</h2>
                    <p>Basically, facilities offered by a school affect the health, behavior, engagement, learning, and growth of the students. The physical and emotional health of students and teachers also depends on the facilities they are getting in school. So, every school should be equipped with proper facilities for the students and teachers, such that an environment conducive to learning is created</p>
                    <p>When choosing a school for their children, parents should consider the facilities provided by each school in order to select the best school for their children’s development.</p>
                    <h2>Following are the five basic facilities that every school should provide to their students: </h2>
                    <ul>
                        <li>
                            <h4>Acoustics and Noise</h4>
                            <p>A classroom should be a quiet place where the students can have mental satisfaction, peace and are able to concentrate without any outer distractions. Noisy classrooms have negative effects on the learning of the students. Students get distracted and can never perform satisfactorily in a noisy environment</p>
                        </li>
                        <li>
                            <h4>Ventilation and Air Quality</h4>
                            <p>In schools, maintaining proper ventilation in each classroom is imperative. Students suffering from respiratory conditions find it hard to stay in the classrooms for long. On top of that, inadequate ventilation can cause discomfort to the student thereby hindering the learning process. The students are unable to focus in such classroom</p>
                        </li>
                        <li>
                            <h4>Lightning</h4>
                            <p>According to a study, students that receive maximum exposure to natural daylight in the classroom, grab the classroom learnings in a much better way. Natural light boosts the morale of the students as well as teachers thereby resulting in good quality of education. So, schools should have access to natural light and use less amount of artificial light</p>
                        </li>
                        <li>
                            <h4>Temperature Control</h4>
                            <p>The temperature at which students learn affects their engagement levels and the overall outcome. If students feel too hot or too cold in the classrooms, it results in low concentration. Proper temperature management is crucial in order to enable the students to focus on classroom learnings without worrying about weather conditions</p>
                        </li>
                        <li>
                            <h4>Space and size of classrooms</h4>
                            <p>Overcrowded classrooms lead to minimum student engagement and improper learning. Teachers also find it uncomfortable to handle a class that is overcrowded. They usually fail to focus on every student when classrooms are overcrowded. So, the number of students in the classroom should be moderate. The classrooms should be spacious in order to provide adequate space for the students to study and for the teachers to give demonstrations</p>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Home;