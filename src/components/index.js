import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const movies = [
    {
        id: 1,
        title: 'Фильм 1',
        story: 'История фильма 1...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 1',
        rating: 'Рейтинг фильма 1',
        characs: 'Персонажи фильма 1',
        creators: 'Режисеры фильма 1'
    },
    {
        id: 2,
        title: 'Фильм 1',
        story: 'История фильма 2...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 2',
        rating: 'Рейтинг фильма 2',
        characs: 'Персонажи фильма 2',
        creators: 'Режисеры фильма 2'
    },
    {
        id: 3,
        title: 'Фильм 3',
        story: 'История фильма 3...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 3',
        rating: 'Рейтинг фильма 3',
        characs: 'Персонажи фильма 3',
        creators: 'Режисеры фильма 3'
    },
    {
        id: 4,
        title: 'Фильм 4',
        story: 'История фильма 4...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 4',
        rating: 'Рейтинг фильма 4',
        characs: 'Персонажи фильма 4',
        creators: 'Режисеры фильма 4'
    },
    {
        id: 5,
        title: 'Фильм 5',
        story: 'История фильма 5...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 5',
        rating: 'Рейтинг фильма 5',
        characs: 'Персонажи фильма 5',
        creators: 'Режисеры фильма 5'
    },
    {
        id: 6,
        title: 'Фильм 6',
        story: 'История фильма 6...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 6',
        rating: 'Рейтинг фильма 6',
        characs: 'Персонажи фильма 6',
        creators: 'Режисеры фильма 6'
    },
    {
        id: 1,
        title: 'Фильм 1',
        story: 'История фильма 1...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 1',
        rating: 'Рейтинг фильма 1',
        characs: 'Персонажи фильма 1',
        creators: 'Режисеры фильма 1'
    },
    {
        id: 2,
        title: 'Фильм 1',
        story: 'История фильма 2...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 2',
        rating: 'Рейтинг фильма 2',
        characs: 'Персонажи фильма 2',
        creators: 'Режисеры фильма 2'
    },
    {
        id: 3,
        title: 'Фильм 3',
        story: 'История фильма 3...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 3',
        rating: 'Рейтинг фильма 3',
        characs: 'Персонажи фильма 3',
        creators: 'Режисеры фильма 3'
    },
    {
        id: 4,
        title: 'Фильм 4',
        story: 'История фильма 4...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 4',
        rating: 'Рейтинг фильма 4',
        characs: 'Персонажи фильма 4',
        creators: 'Режисеры фильма 4'
    },
    {
        id: 5,
        title: 'Фильм 5',
        story: 'История фильма 5...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 5',
        rating: 'Рейтинг фильма 5',
        characs: 'Персонажи фильма 5',
        creators: 'Режисеры фильма 5'
    },
    {
        id: 6,
        title: 'Фильм 6',
        story: 'История фильма 6...',
        price: 20,
        year: 2014,
        genre: 'Жанр фильма 6',
        rating: 'Рейтинг фильма 6',
        characs: 'Персонажи фильма 6',
        creators: 'Режисеры фильма 6'
    },

];

export default function index() {
    return (
        <div>
            <div className='wrapper'>
                <header>
                    <div className='header_blog'>
                        <a href="#" className='logo'>
                            Films Shop
                        </a>
                        <nav>
                            <ul className='header-nav'>
                                <li className='nav-item'>
                                    <a href="#footer" className=''>Главная</a>
                                </li>
                                <li className='nav-item'>О нас</li>
                                <li className='nav-item'>Контакты</li>
                                <li className='nav-item'>Правила</li>
                                <li className='nav-item person-logo'>
                                    <Link to='login'>
                                        <BsPersonCircle />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='header-img' />
                </header>

                <main>
                    <h3 className='title'>Наши фильмы</h3>
                    <hr />
                    <div className='films-container'>
                        {movies.map(film => (
                            <div className='film-item' key={film.id}>
                                <img className='film-poster' src={film.poster} alt='poster' />
                                <h2 className='film-title'>{film.title}</h2>
                                <p className='film-story'>{film.story}</p>
                                <p className='film-genre'>{film.genre}</p>
                                <p className='film-character'>{film.character}</p>
                                <p className='film-creators'>{film.creators}</p>
                                <p className='film-rating'>{film.rating}</p>
                            </div>
                        ))}
                    </div>
                    <hr />
                </main>


            </div>
            <footer>
                <div className='footer-container'>
                    <div className='footer-item'>
                        <h3 className='footer-title cl-white'>Поддержка</h3>
                        <ul className='footer-ul'>
                            <li className='footer-ul-item cl-gray'>+7(757)493-91-32</li>
                            <li className='footer-ul-item cl-gray'>example@gmail.com</li>
                        </ul>
                    </div>

                    <div className='footer-item'>
                        <h3 className='footer-title cl-white'>Поддержка</h3>
                        <ul className='footer-ul'>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                        </ul>
                    </div>

                    <div className='footer-item'>
                        <h3 className='footer-title cl-white'>Поддержка</h3>
                        <ul className='footer-ul'>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                        </ul>
                    </div>

                    <div className='footer-item'>
                        <h3 className='footer-title cl-white'>Поддержка</h3>
                        <ul className='footer-ul'>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                            <li className='footer-ul-item cl-gray'>Lorem Ipsum is simply dummy text</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    )
}
