import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta
          name='description'
          content='Get in touch with Zion Tech Group for your technology needs. Contact our expert team today.'
        />
      </Helmet>

      <div className='contact-page'>
        <AnimatedSection animation='slideUp' delay={200}>
          <div className='container'>
            <div className='contact-page__header'>
              <h1 className='contact-page__title'>Contact Us</h1>
              <p className='contact-page__subtitle'>
                Ready to start your next project? Get in touch with our expert
                team and let's discuss how we can help transform your business
                with cutting-edge technology.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation='fadeIn' delay={400}>
          <div className='container'>
            <div className='contact-page__content'>
              <div className='contact-page__info'>
                <div className='contact-info'>
                  <h2 className='contact-info__title'>Get in Touch</h2>
                  <p className='contact-info__description'>
                    We're here to help you succeed. Whether you need
                    consultation, development, or support, our team is ready to
                    assist you.
                  </p>

                  <div className='contact-methods'>
                    <div className='contact-method'>
                      <div className='contact-method__icon'>📧</div>
                      <div className='contact-method__content'>
                        <h3>Email Us</h3>
                        <p>hello@ziontechgroup.com</p>
                      </div>
                    </div>

                    <div className='contact-method'>
                      <div className='contact-method__icon'>📞</div>
                      <div className='contact-method__content'>
                        <h3>Call Us</h3>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className='contact-method'>
                      <div className='contact-method__icon'>📍</div>
                      <div className='contact-method__content'>
                        <h3>Visit Us</h3>
                        <p>
                          123 Tech Street
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='contact-page__form'>
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default ContactPage;
