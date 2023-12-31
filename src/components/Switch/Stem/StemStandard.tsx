import { Stem } from './StemType'

const StemStandard:React.FC<Stem> = ({ stemFill }) => {
    return (
        <svg width="31" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.1 13.32H3.4a1.4 1.4 0 00-1.4 1.4v3.08a.2.2 0 01-.2.2H.9a.4.4 0 00-.4.4v17.7c0 .22.18.4.4.4h.9c.11 0 .2.09.2.2v.55a.7.7 0 00.7.7H5.1a1.5 1.5 0 001.5-1.5V27a.5.5 0 01.5-.5H11a1 1 0 011 1v18a1.5 1.5 0 001.5 1.5h3.04a1.5 1.5 0 001.5-1.5v-18a1 1 0 011-1h4.26a.5.5 0 01.5.5v9.45a1.5 1.5 0 001.5 1.5h2.13a.7.7 0 00.7-.7v-.75h1.1a.4.4 0 00.4-.4V18.4a.4.4 0 00-.4-.4h-1.097v-3.28a1.4 1.4 0 00-1.4-1.4h-3.825a.3.3 0 01-.3-.3V1.056A.657.657 0 0021.952.4h-4.775a.29.29 0 01-.275-.2.29.29 0 00-.275-.2H13.41a.292.292 0 00-.278.2c-.04.12-.151.2-.277.2H8.147a.747.747 0 00-.747.747V13.02a.3.3 0 01-.3.3z" fill="#404040" />
            <path d="M7.1 13.32H3.4a1.4 1.4 0 00-1.4 1.4v3.08a.2.2 0 01-.2.2H.9a.4.4 0 00-.4.4v17.7c0 .22.18.4.4.4h.9c.11 0 .2.09.2.2v.55a.7.7 0 00.7.7H5.1a1.5 1.5 0 001.5-1.5V27a.5.5 0 01.5-.5H11a1 1 0 011 1v18a1.5 1.5 0 001.5 1.5h3.04a1.5 1.5 0 001.5-1.5v-18a1 1 0 011-1h4.26a.5.5 0 01.5.5v9.45a1.5 1.5 0 001.5 1.5h2.13a.7.7 0 00.7-.7v-.75h1.1a.4.4 0 00.4-.4V18.4a.4.4 0 00-.4-.4h-1.097v-3.28a1.4 1.4 0 00-1.4-1.4h-3.825a.3.3 0 01-.3-.3V1.056A.657.657 0 0021.952.4h-4.775a.29.29 0 01-.275-.2.29.29 0 00-.275-.2H13.41a.292.292 0 00-.278.2c-.04.12-.151.2-.277.2H8.147a.747.747 0 00-.747.747V13.02a.3.3 0 01-.3.3z" className="switch-stem" fill={stemFill} />
            <path d="M7.649.538A.3.3 0 017.9.4l5.166-.01v2.505a.3.3 0 01-.066.187l-.29.363a.2.2 0 00-.044.125V6.2a.2.2 0 00.08.16l.32.24v6.29a.5.5 0 01-.5.5h-5.17V1.018a.3.3 0 01.047-.162L7.65.538z" fill="url(#stem_paint0_linear)" />
            <path d="M22.375.538A.3.3 0 0022.123.4L16.957.39v2.505a.3.3 0 00.066.187l.29.363a.2.2 0 01.044.125V6.2a.2.2 0 01-.08.16l-.32.24v6.29a.5.5 0 00.5.5h5.17V1.018a.3.3 0 00-.048-.162l-.204-.318z" fill="url(#stem_paint1_linear)" />
            <path d="M13.067 3h3.893l.4.5v1h-4.693v-1l.4-.5z" fill="url(#stem_paint2_linear)" />
            <path d="M13.067 6.6h3.893l.32-.24a.2.2 0 00.08-.16V5h-4.693v1.2a.2.2 0 00.08.16l.32.24z" fill="url(#stem_paint3_linear)" />
            <path d="M18.04 45.5v-19H12v19a1.5 1.5 0 001.5 1.5h3.04a1.5 1.5 0 001.5-1.5z" fill="url(#stem_paint4_linear)" />
            <path d="M3 26.9c0-.22.18-.4.4-.4h1.7c.22 0 .4.18.4.4v10.4a.2.2 0 01-.2.2H3.2a.2.2 0 01-.2-.2V26.9z" fill="url(#stem_paint5_linear)" />
            <path d="M24.8 26.9c0-.22.18-.4.4-.4h1.7c.22 0 .4.18.4.4v10.4a.2.2 0 01-.2.2H25a.2.2 0 01-.2-.2V26.9z" fill="url(#stem_paint6_linear)" />
            <path d="M7.4 13.32H3.5a1.5 1.5 0 00-1.5 1.5h26.133a1.5 1.5 0 00-1.5-1.5H7.4z" fill="url(#stem_paint7_linear)" />
            <path d="M.9 36.5H2V18H.9a.4.4 0 00-.4.4v17.7c0 .22.18.4.4.4z" fill="url(#stem_paint8_linear)" />
            <path d="M29.23 36.5h-1.1V18h1.1c.22 0 .4.18.4.4v17.7a.4.4 0 01-.4.4z" fill="url(#stem_paint9_linear)" />
            <defs>
                <linearGradient id="stem_paint0_linear" x1="14.567" y1="9.5" x2="7.567" y2="9" gradientUnits="userSpaceOnUse">
                    <stop offset=".276" stopOpacity=".24" />
                    <stop offset=".828" stopOpacity=".05" />
                </linearGradient>
                <linearGradient id="stem_paint1_linear" x1="15.457" y1="9.5" x2="22.457" y2="9" gradientUnits="userSpaceOnUse">
                    <stop offset=".448" stopOpacity=".15" />
                    <stop offset=".88" stopOpacity=".04" />
                </linearGradient>
                <linearGradient id="stem_paint2_linear" x1="15.067" y1="3" x2="15.067" y2="4" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity=".3" />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stem_paint3_linear" x1="15.067" y1="6.5" x2="15.067" y2="5.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" stopOpacity=".1" />
                    <stop offset=".375" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stem_paint4_linear" x1="12" y1="37" x2="18" y2="37" gradientUnits="userSpaceOnUse">
                    <stop offset=".177" stopColor="#2F2F2F" stopOpacity=".25" />
                    <stop offset=".497" stopColor="#434343" stopOpacity="0" />
                    <stop offset=".797" stopColor="#2F2F2F" stopOpacity=".25" />
                </linearGradient>
                <linearGradient id="stem_paint5_linear" x1="3" y1="32.5" x2="5.5" y2="32.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".635" stopColor="#2F2F2F" stopOpacity=".3" />
                    <stop offset=".917" stopColor="#505050" stopOpacity=".1" />
                </linearGradient>
                <linearGradient id="stem_paint6_linear" x1="24.8" y1="32.5" x2="27.3" y2="32.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".635" stopColor="#2F2F2F" stopOpacity=".3" />
                    <stop offset=".917" stopColor="#505050" stopOpacity=".1" />
                </linearGradient>
                <linearGradient id="stem_paint7_linear" x1="15.2" y1="13.32" x2="15.2" y2="15.875" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#404040" stopOpacity=".15" />
                    <stop offset=".078" stopColor="#323232" stopOpacity=".5" />
                    <stop offset=".443" stopColor="#404040" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stem_paint8_linear" x1=".5" y1="26.5" x2="2" y2="26.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".297" stopColor="#404040" stopOpacity="0" />
                    <stop offset=".714" stopColor="#404040" stopOpacity=".2" />
                    <stop offset="1" stopColor="#404040" stopOpacity=".3" />
                </linearGradient>
                <linearGradient id="stem_paint9_linear" x1="29.63" y1="26.5" x2="28.13" y2="26.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".297" stopColor="#404040" stopOpacity="0" />
                    <stop offset=".714" stopColor="#404040" stopOpacity=".2" />
                    <stop offset="1" stopColor="#404040" stopOpacity=".3" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default StemStandard;