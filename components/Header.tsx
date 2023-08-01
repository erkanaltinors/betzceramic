import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <Fragment>
            <header className="py-2 sticky">
                <div className="container">
                    <Link href={'/'}><Image alt="Betz Ceramic Logo" src={'https://raw.githubusercontent.com/erkanaltinors/betzceramic/main/public/images/logo.png'} width={150} height={75} className="mx-auto" /></Link>
                </div>
                <span></span>
            </header>
        </Fragment>
    );

}