import PropTypes from 'prop-types';
import styles from "./Post.module.css"
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


//TODO: usar useState para adicionar comentarios
//TODO: passar os parametros para o componente Comment
//TODO: deletar um comentario passando o id do comentario em uma função para o componente Comment

export function Post({ author, content, publishedAt}) {
  const datePlublishedFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm",{
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={datePlublishedFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>;
          }else if (item.type === 'link') {
            return <p key={index}><a>{item.content}</a></p>;
          }else if (item.type === 'hashtags') {
            return item.content.map((hashtag, index2) => (
              <a className={styles.hashtag} key={index2}>{hashtag}</a>
            ));
          }
        })}
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentario" 
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
