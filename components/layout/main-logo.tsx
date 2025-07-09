import codepen from 'react-useanimations/lib/codepen'
import UseAnimationsWrapper from "../use-animations-wrapper"
import Link from 'next/link';

function MainLogo() {
  return (
    <Link href={"/"}>
        <h1 className="text-2xl font-bold flex-center gap-0.5 font-lora">
            <span>
                Abi K.
            </span>
            <UseAnimationsWrapper animation={codepen} size={28} strokeColor='#ac6bbe' className='rotate-45' />
        </h1>
    </Link>
    )
}

export default MainLogo;
