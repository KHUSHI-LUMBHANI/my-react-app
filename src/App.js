import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import InstructorInfo from "./components/InstructorInfo";
import CoursePage from "./components/CourcePage";
import AboutInstructorPage from "./components/AboutInstructor";
import TestimonialPage from "./components/Testimonial";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/instructor" component={InstructorInfo} />
          <Route exact path="/course" component={CoursePage} />
          <Route exact path="/about-instructor" component={AboutInstructorPage} />
          <Route exact path="/testimonial" component={TestimonialPage} />
        </Routes>
      </BrowserRouter> */}
      <InstructorInfo/>
      <CoursePage/>
      <AboutInstructorPage/>
      <TestimonialPage/>
    </div>
  );
};

export default App;
