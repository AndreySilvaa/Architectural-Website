import imgheader from '../assets/aboutBackground.jpg'

//sec2
import sec2icon1 from '../assets/about-sec2-icon1.png'
import sec2icon2 from '../assets/about-sec2-icon2.png'
import sec2icon3 from '../assets/about-sec2-icon3.png'
import sec2icon4 from '../assets/about-sec2-icon4.png'

//sec3
import sec3img1 from '../assets/about-sec3-img1.png'
import sec3img2 from '../assets/about-sec3-img2.jpeg'
import iconFace from '../assets/icons8-facebook.svg'
import iconTwi from '../assets/icons8-twitter.svg'
import iconInst from '../assets/icons8-instagram.svg'

//sec4
import sec4img1 from '../assets/about-sec4-img1.jpeg'
import sec4img2 from '../assets/about-sec4-img2.jpeg'
import sec4img3 from '../assets/about-sec4-img3.jpeg'

//sec5
import sec5icon1 from '../assets/about-sec5-icon1.png'
import sec5icon2 from '../assets/about-sec5-icon2.png'
import sec5icon3 from '../assets/about-sec5-icon3.png'

//sec6 
import sec6img1 from '../assets/about-sec6-img1.jpg'
import sec6img2 from '../assets/about-sec6-img2.jpg'
import sec6img3 from '../assets/about-sec6-img3.jpg'
import sec6img4 from '../assets/about-sec6-img4.jpg'
import sec6img5 from '../assets/about-sec6-img5.jpg'
import sec6img6 from '../assets/about-sec6-img6.jpg'

//sec7
import iconplus from '../assets/plus.svg'
import iconless from '../assets/minus.svg'

export const aboutData = [
    [{header:{headerImg: imgheader}},
    ],
    // SECTION 2
    [{icon:sec2icon1, title: 'MOTIVATION'}, {icon:sec2icon2, title:'CREATIVITY'}, {icon:sec2icon3, title:'POSITIVITY'}, {icon:sec2icon4, title:'DELEGATING'}],
    // SECTION 3 
    [{img1: sec3img1},
    {img2: sec3img2},
    [{icon: iconFace, url: 'https://www.facebook.com'}, {icon: iconTwi, url: 'https://twitter.com'}, {icon: iconInst, url: 'https://www.instagram.com'}],
    ],
    // SECTION 4
    [{img: sec4img1, name: 'MARY BROWN', job: 'creative leader', message: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum'},
    {img: sec4img2, name: 'ANN RICHMOND', job: 'creative leader', message: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum'},
    {img: sec4img3, name: 'BOB GREENFIELD', job: 'programming guru', message: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum'}
    ],
    // SECTION 5
    [{icon:sec5icon1, title: 'APP DEVELOPMENT'}, {icon:sec5icon2, title:'MOBILITY SERVICES'}, {icon:sec5icon3, title:'CONSULTING'}],
    // SECTION 6
    [sec6img1, sec6img2, sec6img3, sec6img4, sec6img5, sec6img6],
    // SECTION 7
    [{fq: 'Do you provide support?', less: iconless, plus: iconplus, message: 'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'},
    {fq: 'What types of files I will get?', less: iconless, plus: iconplus, message: 'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'},
    {fq: 'How to get future updates?', less: iconless, plus: iconplus, message: 'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'}
]
]