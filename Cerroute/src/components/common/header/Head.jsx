import React, { useState } from "react"
import { useHistory } from "react-router-dom"; // useHistory hook'unu import edin

const Head = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const history = useHistory(); // useHistory hook'unu kullanın

    const handleClick = (button) => {
        setSelectedButton(button);
        if (button === 'individuals') {
            window.location.href = '/';
        }
    }

    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='buttons'>
                        <header-button className={selectedButton === 'individuals' ? 'individuals selected' : 'individuals'} onClick={() => handleClick('individuals')}>Bireyler İçin</header-button>
                        <header-button className={selectedButton === 'businesses' ? 'businesses selected' : 'businesses'} onClick={() => handleClick('businesses')}>İşletmeler İçin</header-button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head
