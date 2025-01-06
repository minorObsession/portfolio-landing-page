import { useState } from "react";
// ! THESE SHOULD BE PASSED IN NOT IMPORTED HERE!!!
// ! MAKE THIS REUSABLE!!!
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiSupabase,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
} from "react-icons/si";

const ReactQuerySvg = (
  <svg
    width="1rem"
    height="1rem"
    viewBox="0 0 190 190"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>emblem-light</title>
    <desc>Created with Sketch.</desc>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <path
          d="M39.7239712,61.3436237 C36.631224,46.362877 35.9675112,34.8727722 37.9666331,26.5293551 C39.1555965,21.5671678 41.3293088,17.5190846 44.6346064,14.5984631 C48.1241394,11.5150478 52.5360327,10.0020122 57.493257,10.0020122 C65.6712013,10.0020122 74.2682602,13.7273214 83.4557246,20.8044264 C87.2031203,23.6910458 91.0924366,27.170411 95.1316515,31.2444746 C95.4531404,30.8310265 95.8165416,30.4410453 96.2214301,30.0806152 C107.64098,19.9149716 117.255245,13.5989272 125.478408,11.1636507 C130.367899,9.715636 134.958526,9.57768202 139.138936,10.983031 C143.551631,12.4664684 147.06766,15.5329489 149.548314,19.8281091 C153.642288,26.9166735 154.721918,36.2310983 153.195595,47.7320243 C152.573451,52.4199112 151.50985,57.5263831 150.007094,63.0593153 C150.574045,63.1277086 151.142416,63.2532808 151.705041,63.4395297 C166.193932,68.2358678 176.453582,73.3937462 182.665021,79.2882839 C186.360669,82.7953831 188.773972,86.6998434 189.646365,91.0218204 C190.567176,95.5836746 189.669313,100.159332 187.191548,104.451297 C183.105211,111.529614 175.591643,117.11221 164.887587,121.534031 C160.589552,123.309539 155.726579,124.917559 150.293259,126.363748 C150.541176,126.92292 150.733521,127.516759 150.862138,128.139758 C153.954886,143.120505 154.618598,154.61061 152.619477,162.954027 C151.430513,167.916214 149.256801,171.964297 145.951503,174.884919 C142.46197,177.968334 138.050077,179.48137 133.092853,179.48137 C124.914908,179.48137 116.31785,175.756061 107.130385,168.678956 C103.343104,165.761613 99.4108655,162.238839 95.3254337,158.108619 C94.9050753,158.765474 94.3889681,159.376011 93.7785699,159.919385 C82.3590198,170.085028 72.744755,176.401073 64.5215915,178.836349 C59.6321009,180.284364 55.0414736,180.422318 50.8610636,179.016969 C46.4483686,177.533532 42.9323404,174.467051 40.4516862,170.171891 C36.3577116,163.083327 35.2780823,153.768902 36.8044053,142.267976 C37.449038,137.410634 38.56762,132.103898 40.1575891,126.339009 C39.5361041,126.276104 38.9120754,126.144816 38.2949591,125.940529 C23.8060684,121.144191 13.5464184,115.986312 7.33497892,110.091775 C3.63933121,106.584675 1.22602752,102.680215 0.353635235,98.3582381 C-0.567176333,93.7963839 0.330686581,89.2207269 2.80845236,84.9287618 C6.89478863,77.8504443 14.4083565,72.2678481 25.1124133,67.8460273 C29.5385143,66.0176154 34.5637208,64.366822 40.1939394,62.8874674 C39.9933393,62.3969171 39.8349374,61.8811235 39.7239712,61.3436237 Z"
          fill="#002C4B"
          fillRule="nonzero"
          transform="translate(95.000000, 95.000000) scale(-1, 1) translate(-95.000000, -95.000000) "
        ></path>
        <path
          d="M80.3968824,64 L109.608177,64 C111.399254,64 113.053521,64.958025 113.944933,66.5115174 L128.577138,92.0115174 C129.461464,93.5526583 129.461464,95.4473417 128.577138,96.9884826 L113.944933,122.488483 C113.053521,124.041975 111.399254,125 109.608177,125 L80.3968824,125 C78.6058059,125 76.9515387,124.041975 76.0601262,122.488483 L61.4279211,96.9884826 C60.543596,95.4473417 60.543596,93.5526583 61.4279211,92.0115174 L76.0601262,66.5115174 C76.9515387,64.958025 78.6058059,64 80.3968824,64 Z M105.987827,70.2765273 C107.779849,70.2765273 109.434839,71.2355558 110.325899,72.7903404 L121.343038,92.0138131 C122.225607,93.5537825 122.225607,95.4462175 121.343038,96.9861869 L110.325899,116.20966 C109.434839,117.764444 107.779849,118.723473 105.987827,118.723473 L84.0172329,118.723473 C82.2252106,118.723473 80.5702207,117.764444 79.6791602,116.20966 L68.6620219,96.9861869 C67.7794521,95.4462175 67.7794521,93.5537825 68.6620219,92.0138131 L79.6791602,72.7903404 C80.5702207,71.2355558 82.2252106,70.2765273 84.0172329,70.2765273 L105.987827,70.2765273 Z M102.080648,77.1414791 L87.9244113,77.1414791 C86.1342282,77.1414791 84.4806439,78.0985567 83.5888998,79.6508285 L83.5888998,79.6508285 L76.4892166,92.0093494 C75.6032319,93.5515958 75.6032319,95.4484042 76.4892166,96.9906506 L76.4892166,96.9906506 L83.5888998,109.349172 C84.4806439,110.901443 86.1342282,111.858521 87.9244113,111.858521 L87.9244113,111.858521 L102.080648,111.858521 C103.870831,111.858521 105.524416,110.901443 106.41616,109.349172 L106.41616,109.349172 L113.515843,96.9906506 C114.401828,95.4484042 114.401828,93.5515958 113.515843,92.0093494 L113.515843,92.0093494 L106.41616,79.6508285 C105.524416,78.0985567 103.870831,77.1414791 102.080648,77.1414791 L102.080648,77.1414791 Z M98.3191856,83.7122186 C100.108028,83.7122186 101.760587,84.6678753 102.652827,86.2183156 L105.983552,92.0060969 C106.87203,93.5500005 106.87203,95.4499995 105.983552,96.9939031 L102.652827,102.781684 C101.760587,104.332125 100.108028,105.287781 98.3191856,105.287781 L91.685874,105.287781 C89.8970316,105.287781 88.2444725,104.332125 87.3522326,102.781684 L84.021508,96.9939031 C83.1330298,95.4499995 83.1330298,93.5500005 84.021508,92.0060969 L87.3522326,86.2183156 C88.2444725,84.6678753 89.8970316,83.7122186 91.685874,83.7122186 L98.3191856,83.7122186 Z M95.0037937,90.1848875 C93.459294,90.1848875 92.0343817,91.0072828 91.2630046,92.3424437 C90.4917325,93.6774232 90.4917325,95.3225768 91.2630046,96.6575563 C92.0343817,97.9927172 93.459294,98.8151125 95.0012659,98.8151125 L95.0012659,98.8151125 C96.5457656,98.8151125 97.9706779,97.9927172 98.7420549,96.6575563 C99.5133271,95.3225768 99.5133271,93.6774232 98.7420549,92.3424437 C97.9706779,91.0072828 96.5457656,90.1848875 95.0037937,90.1848875 L95.0037937,90.1848875 Z M60,94.5009646 L67.7677636,94.5009646"
          fill="#FFD94C"
        ></path>
        <path
          d="M54.8601729,108.357758 C56.1715224,107.608286 57.8360246,108.074601 58.5779424,109.399303 L58.5779424,109.399303 L59.0525843,110.24352 C62.8563392,116.982993 66.8190116,123.380176 70.9406016,129.435068 C75.8078808,136.585427 81.28184,143.82411 87.3624792,151.151115 C88.3168778,152.30114 88.1849437,154.011176 87.065686,154.997937 L87.065686,154.997937 L86.4542085,155.534625 C66.3465389,173.103314 53.2778188,176.612552 47.2480482,166.062341 C41.3500652,155.742717 43.4844915,136.982888 53.6513274,109.782853 C53.876818,109.179582 54.3045861,108.675291 54.8601729,108.357758 Z M140.534177,129.041504 C141.986131,128.785177 143.375496,129.742138 143.65963,131.194242 L143.65963,131.194242 L143.812815,131.986376 C148.782365,157.995459 145.283348,171 133.315764,171 C121.609745,171 106.708724,159.909007 88.6127018,137.727022 C88.2113495,137.235047 87.9945723,136.617371 88,135.981509 C88.013158,134.480686 89.2357854,133.274651 90.730918,133.287756 L90.730918,133.287756 L91.6846544,133.294531 C99.3056979,133.335994 106.714387,133.071591 113.910723,132.501323 C122.409039,131.82788 131.283523,130.674607 140.534177,129.041504 Z M147.408726,73.8119663 C147.932139,72.4026903 149.508386,71.6634537 150.954581,72.149012 L150.954581,72.149012 L151.742552,72.4154854 C177.583763,81.217922 187.402356,90.8916805 181.198332,101.436761 C175.129904,111.751366 157.484347,119.260339 128.26166,123.963678 C127.613529,124.067994 126.948643,123.945969 126.382735,123.618843 C125.047025,122.846729 124.602046,121.158214 125.388848,119.847438 L125.388848,119.847438 L125.889328,119.0105 C129.877183,112.31633 133.481358,105.654262 136.701854,99.0242957 C140.50501,91.1948179 144.073967,82.7907081 147.408726,73.8119663 Z M61.7383398,66.0363218 C62.3864708,65.9320063 63.0513565,66.0540315 63.6172646,66.3811573 C64.9529754,67.153271 65.3979538,68.8417862 64.6111517,70.1525615 L64.6111517,70.1525615 L64.1106718,70.9895001 C60.1228168,77.6836699 56.5186416,84.3457379 53.2981462,90.9757043 C49.49499,98.8051821 45.9260328,107.209292 42.5912744,116.188034 C42.0678608,117.59731 40.4916142,118.336546 39.045419,117.850988 L39.045419,117.850988 L38.2574475,117.584515 C12.4162372,108.782078 2.59764398,99.1083195 8.80166786,88.5632391 C14.8700957,78.2486335 32.515653,70.7396611 61.7383398,66.0363218 Z M103.545792,34.4653746 C123.653461,16.8966864 136.722181,13.3874478 142.751952,23.9376587 C148.649935,34.2572826 146.515508,53.0171122 136.348673,80.2171474 C136.123182,80.8204179 135.695414,81.324709 135.139827,81.6422422 C133.828478,82.3917144 132.163975,81.9253986 131.422058,80.6006966 L131.422058,80.6006966 L130.947416,79.7564798 C127.143661,73.0170065 123.180988,66.6198239 119.059398,60.564932 C114.192119,53.4145727 108.71816,46.1758903 102.637521,38.8488847 C101.683122,37.6988602 101.815056,35.9888243 102.934314,35.0020629 L102.934314,35.0020629 Z M57.6842361,18 C69.3902551,18 84.2912758,29.0909926 102.387298,51.2729777 C102.788651,51.7649527 103.005428,52.3826288 103,53.0184911 C102.986842,54.5193144 101.764215,55.7253489 100.269082,55.7122445 L100.269082,55.7122445 L99.3153456,55.7054689 C91.6943021,55.6640063 84.2856126,55.9284091 77.0892772,56.4986773 C68.5909612,57.17212 59.7164767,58.325393 50.4658235,59.9584962 C49.0138691,60.2148231 47.6245044,59.2578618 47.3403697,57.805758 L47.3403697,57.805758 L47.1871846,57.0136235 C42.2176347,31.0045412 45.7166519,18 57.6842361,18 Z"
          fill="#FF4154"
        ></path>
      </g>
    </g>
  </svg>
);

const techIcons = {
  JavaScript: <SiJavascript style={{ color: "#F7DF1E" }} />,
  React: <FaReact style={{ color: "#61DAFB" }} />,
  HTML5: <FaHtml5 style={{ color: "#E34F26" }} />,
  CSS3: <FaCss3Alt style={{ color: "#1572B6" }} />,
  Supabase: <SiSupabase style={{ color: "#3ECF8E" }} />,
  "Redux Toolkit": <SiRedux style={{ color: "#764ABC" }} />,
  "React Query": ReactQuerySvg,
  "Tailwind CSS": <SiTailwindcss style={{ color: "#38BDF8" }} />,
  "Styled Components": <SiStyledcomponents style={{ color: "#DB7093" }} />,
};

// ! IT CAN BE REFACTORED TO BE MORE REUSABLE
const TechIconsLine = ({
  techs,
  hoveredTech,
  setHoveredTech,
  techIcons,
  top = false,
}) => (
  <div className="flex justify-center mt-4 gap-8 relative grow-0">
    {techs.map((tech) => (
      <span
        key={tech}
        className="flex items-center justify-center bg-gray-700 p-2 rounded-full scale-150 relative"
        onMouseEnter={() => setHoveredTech(tech)}
        onMouseLeave={() => setHoveredTech(null)}
      >
        {techIcons[tech] || tech}
        {/* Tooltip */}
        {hoveredTech === tech && (
          <span
            className={`absolute ${
              top ? "top-[-30px]" : "bottom-[-30px]"
            } bg-gray-900 text-white text-xs p-1 rounded shadow-lg whitespace-nowrap z-[100]`}
          >
            {tech}
          </span>
        )}
      </span>
    ))}
  </div>
);

// ! IT CAN BE REFACTORED TO BE MORE REUSABLE
function IconsIn2Rows({ icons }) {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Calculate the midpoint to split icons into two halves
  const midIndex = Math.ceil(icons.length / 2);
  const firstLineTechs = icons.slice(0, midIndex);
  const secondLineTechs = icons.slice(midIndex);

  return (
    <div className="flex flex-col gap-5">
      {/* First line of icons */}
      <TechIconsLine
        top={true}
        techs={firstLineTechs}
        hoveredTech={hoveredTech}
        setHoveredTech={setHoveredTech}
        techIcons={techIcons}
      />

      {/* Second line of icons */}
      <TechIconsLine
        techs={secondLineTechs}
        hoveredTech={hoveredTech}
        setHoveredTech={setHoveredTech}
        techIcons={techIcons}
      />
    </div>
  );
}

export default IconsIn2Rows;
