import React, {useState} from 'react';
import './App.css';
import CreatePost from "./components/CreatePost";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from "./components/Login";
import Profile from "./components/Profile";
import i18next from 'i18next';
import moment from "moment";

const LANGUAGE = window.localStorage.getItem('language') as string ?? 'en';

i18next.init({
    lng: LANGUAGE,
    fallbackLng: 'en',
    resources: require(`./intern/${ LANGUAGE }.json`),
});

const App:React.FC = () => {
    const [language, setLanguage] = useState<string>(i18next.language);
    const [showLanguageOption, setShowLanguageOption] = useState<boolean>(false);
    const switchLanguage = (lang:string) => {
        i18next.init({
            lng: lang,
            resources: require(`./intern/${lang}.json`),
        })
        window.localStorage.setItem('language', lang)
        moment.locale(lang);
        setLanguage(lang)
    }

  return (
    <div className='wrapper'>
      <header>
        <h1>{ i18next.t('logo') }</h1>
          <div className='avatar' />
          <div className='language'>
              <input type="button" id='switch' value={ i18next.t('lang') as string } onClick={() => setShowLanguageOption(true)} onBlur={() => setTimeout(() => setShowLanguageOption(false), 150)}/>
              {
                  showLanguageOption && (
                      <ul className='language-list'>
                          <li onClick={() => switchLanguage('ru')} className={language === 'ru' ? 'checked' : undefined}>Русский</li>
                          <li onClick={() => switchLanguage('en')} className={language === 'en' ? 'checked' : undefined}>English</li>
                          <li onClick={() => switchLanguage('de')} className={language === 'de' ? 'checked' : undefined}>Deutsche</li>
                      </ul>
                  )
              }
          </div>
      </header>
      <div className='content'>
          <BrowserRouter>
              <Switch>
                  <Route path={'/'} exact component={ CreatePost }/>
                  <Route path={'/login'} component={ Login } />
                  <Route path={'/profile'} component={ Profile } />
              </Switch>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
