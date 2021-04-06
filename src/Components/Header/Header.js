
import { Title } from "../../Moleculas/Title/Title";
import { SlideCard } from "../SlideCard/SlideCard";
import "./header.scss"

function Header() {



    return (      
        <header className="App-header">
            <Title title="Pets"></Title>
            <SlideCard />
        </header>
    );
  }
  
  export default Header;
  