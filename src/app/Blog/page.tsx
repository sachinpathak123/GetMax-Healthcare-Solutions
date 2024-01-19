import Image from 'next/image';
import './blog.css'
import Dropdowns from './blogcomponents/dropdowns';


const items = [
    {
        title: "Filter by Topic",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Filter by Solutions",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Sort by",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    }
]
export default function Blog () {
    return (
        <>
            <div >
                <Image src="/images/blog.jpg" alt="case" className="w-full h-[70vh]" width="1519" height="0"/>
            </div>

            <div>
                {items.map(item => (
                        <Dropdowns 
                            title={item.title}
                            field1={item.field1}
                            field2={item.field2}
                            field3={item.field3}
                            field4={item.field4}
                        />
                    ))
                }
            </div>

        </>
    );
};