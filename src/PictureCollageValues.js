import javaPNG from '../src/images/photoCollage/java.png';
import pythonPNG from '../src/images/photoCollage/python.png';
import reactImgPNG from '../src/images/photoCollage/reactImg.png'
import SQLPNG from '../src/images/photoCollage/SQL.png';

let PictureCollageValues;
export default PictureCollageValues = [
    {
        src: javaPNG,
        count: 1,
        style: 'img1',
        pictureText: `Java was the second language I began to study seriously. I studied Object Oriented
        with Dr. Olufisayo Omojokun. I truly enjoyed this class as I began to deeply understand 
        concepts and take programming as a passion. Java itself is one of my favorite languages
        as it requires specific syntax, but does not make it difficult to follow those standards.
        Also, it is straightforward to learn which only further encouraged me to learn.`,
    },
    {
        src: pythonPNG,
        count: 2,
        style: 'img2',
        pictureText: `I started coding in Python as a freshman in high school. Back then I was still unsure as
        to what career I wanted to pursue. I began learning Python on my own and then testing
        my skills by solving problems in Codewars. I would usually start solving problems around
        8 or 9 and then (to my mom's despise) get hooked and code until the morning hours. After a while I
        started to watch college professors teach python through courses like GT 1301 (which I later took at Tech)
        and CS50.`,
    },
    {
        src: reactImgPNG,
        count: 3,
        style: 'img3',
        pictureText: `React is the first framework I learned for JavaScript. I enjoyed it a lot because of the amount
        I could reuse my code and also because of how its hooks work. With the power of hooks I was able to write my
        code without needing to be too verbose as well as being able to implement certian aspects which would otherwise
        be very difficult to implement. This current website is what caused me to learn react, and I am glad that I chose to 
        use react over a different framework.`,
    },
    {
        src: SQLPNG,
        count: 4,
        style: 'img4',
        pictureText: `I am currently using SQL to build my database project. In this project, I am planning
        on creating a GUI where a user can log in and manage their upcoming projects. Based
         on the location, date, and manager it will then narrow down certain questions and
        prompt the user what they should inquire about next.`,
    }
]