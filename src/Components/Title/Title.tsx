import "./Title.scss"

function Title({text}: {text: string}) {
    return (
      <div className="title-container">
        <h2 data-text={text}>
          {text}
        </h2>
      </div>
    )
  }
  
  export { Title };