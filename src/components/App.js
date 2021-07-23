import '../container/scrollbar/scrollbar.scss';
import Home from '../container/home/home';
import Projects from '../container/projects/projects';
import Contact from '../container/contact/contact';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';


function App() {
  return (
    <div>
      
      <CustomCursor
        targets={['.tech-icons', '.nav-container', '.emailme', '.project', '.button', '.dothis', '.contact-icons']}
        customClass='custom-cursor'
        dimensions={50}
        fill='#555'
        smoothness={{
          movement: 0.4,
          scale: 0.5,
          opacity: 0.9,
        }}
        targetOpacity={0.5}
        targetScale={1.8}
      />

      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
