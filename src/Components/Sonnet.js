import React from 'react';
import special1 from '../assets/img/specials-1.jpg';
import special2 from '../assets/img/specials-2.jpg';
import special3 from '../assets/img/specials-3.jpg';
import special4 from '../assets/img/specials-4.jpg';
import special5 from '../assets/img/specials-5.jpg';
import {Tab} from 'react-bootstrap';

const Sonnet = () => {
    return (
        <>
            <Tab.Pane eventKey="first">
                <div className="row">
                    <div className="col-md-8 col-12  order-2 order-md-1">
                        <div className="full">
                            <h3> <i>  Impedit facilis occaecati odio neque aperiam sit </i></h3>
                            <p>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12  order-1 order-md-2">
                        <img src={special1} width="100%" />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <div className="row">
                    <div className="col-md-8 col-12 order-2 order-md-1">
                        <div className="full">
                            <h3> <i>  Et blanditiis nemo veritatis excepturi </i></h3>
                            <p>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 order-1 order-md-2">
                        <img src={special2} width="100%" />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <div className="row">
                    <div className="col-md-8 col-12 order-2 order-md-1">
                        <div className="full">
                            <h3> <i> Impedit facilis occaecati odio neque aperiam sit </i></h3>
                            <p>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 order-1 order-md-2">
                        <img src={special3} width="100%" />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
                <div className="row">
                    <div className="col-md-8 col-12 order-2 order-md-1">
                        <div className="full">
                            <h3> <i> Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore </i></h3>
                            <p>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 order-1 order-md-2">
                        <img src={special4} width="100%" />
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="five">
                <div className="row">
                    <div className="col-md-8 col-12 order-2 order-md-1">
                        <div className="full">
                            <h3> <i> Est eveniet ipsam sindera pad rone matrelat sando reda </i></h3>
                            <p>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 order-1 order-md-2">
                        <img src={special5} width="100%" />
                    </div>
                </div>
            </Tab.Pane>
        </>
    )
}

export default Sonnet;