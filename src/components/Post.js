function Post(props) {
    return(
        <div className= 'post'>　{/*インラインスタイルは使わない方がいい*/}
          <p>{props.title}</p>
          <p>{props.body}</p>
        </div>
    );
}
export default Post;