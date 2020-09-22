import React from "react";
import authorPhotoHQ from '../images/image-03-hq.jpg'
import authorPhoto from '../images/image-03.jpg'

export default function Author () {
    return (
        <section className="author">
            <div className="author__photo">
                <picture>
                    <source className="author__photo-image" srcSet={authorPhotoHQ}
                            media="(max-width: 767px)" />
                        <source className="author__photo-image" srcSet={authorPhoto}
                                media="(min-width: 768px)" />
                            <img className="author__photo-image" src={authorPhoto}
                                 alt="фото автора" />
                </picture>
            </div>
            <div className="author__about">
                <h2 className="author__title">Об авторе</h2>
                <p className="author__paragraph">Это блок с описанием автора проекта. Здесь следует указать, как вас
                    зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                <p className="author__paragraph">Также можно рассказать о процессе обучения в Практикуме, чему вы тут
                    научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    )
}