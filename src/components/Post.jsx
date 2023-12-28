import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post bacana!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;
        setComments([...comments, newCommentText]);
        setNewCommentText('');
        
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

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

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    onChange={handleNewCommentChange} 
                    name="comment" 
                    placeholder="comentar"
                    value={newCommentText}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => <Comment key={comment} content={comment} />)}
            </div>
        </article>
    )
}