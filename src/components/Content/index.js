import './Content.css';

function Content(props){
    const {titulo, img, alt} = props;
    return (
      <div className="Content">
        <div className="post">
          <h1 className="titulo">{titulo}</h1>
          <img src={img} alt={alt} />
        </div>
      </div>
    );
}

export default Content();