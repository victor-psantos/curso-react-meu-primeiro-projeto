import './Contents.css';
import Content from '../Content';

function Contents(){
    return (
        <div className="Contents">
            <Content 
                titulo = "High five, Hyperlink!"
                img = "img/hyperlink.webp"
                alt = "Hyperlink"
            />
            <Content 
                titulo = "Sorry, bro."
                img = "img/sorry_bro.webp"
                alt = "Sorry, bro."
            />
      </div>
    );
}

export default Contents();