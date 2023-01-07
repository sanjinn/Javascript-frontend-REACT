import React from 'react'
import MainMenu from '../sections/MainMenu'
import Breadcrumb from '../sections/Breadcrumb'
import GoogleMaps from '../sections/GoogleMaps'
import ContactForm from '../sections/ContactForm'

const ContactView: React.FC = () => {
    return (
        <>
        <MainMenu />
        <Breadcrumb currentPage="Contacts" />
        <GoogleMaps />
        <ContactForm />
        </>
    )
}

export default ContactView