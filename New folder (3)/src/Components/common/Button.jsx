import styles from "./Button.module.css";

function Button({ disabled, children, fun,vid }) {
  
  const funner = (fun) => {
    switch (fun) {
      case 'pl':
        vid.current.play()
        break;
      case 'pz':
        vid.current.pause()
        break;
      case 'sk':
        // vid.currentTime=vid.currentTime+30
        vid.current.currentTime=vid.current.currentTime+30
       console.log(vid.current.currentTime)
        break;
    case '':
        
        break;
    
      default:
        console.log("no proper input")
        break;
    }
    
  }


  return (
    <button disabled={disabled} onClick={()=>funner(fun)} className={styles.button} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
