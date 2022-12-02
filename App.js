import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UserLogin from './components/login-signup/user-login/UserLogin';
import UserSignup from './components/login-signup/user-signup/UserSignup';
import AuthorLogin from './components/login-signup/author-login/AuthorLogin';
import ProofreaderLogin from './components/login-signup/proofreader-login/ProofreaderLogin';
import AdminLogin from './components/login-signup/admin-login/AdminLogin';

import UserDashboard from './components/dashboards/user/user-dashboard/UserDashboard';
import AdminDashboard from './components/dashboards/admin/admin-dashboard/AdminDashboard';
import AuthorDashboard from './components/dashboards/author/author-dashboard/AuthorDashboard';
import ProofreaderDashboard from './components/dashboards/proofreader/proofreader-dashboard/ProofreaderDashboard';

import FeedbackSuggestion from './components/feedback-suggestion-complaint/FeedbackSuggestion';
import Complaint from './components/feedback-suggestion-complaint/Complaint';
import BookGallery from "./components/book-gallery/BookGallery";
import AddProofreader from './components/dashboards/admin/add-proofreader/AddProofreader';
import ViewAllUser from './components/dashboards/admin/view-all-user/ViewAllUser';
import PublishedBook from './components/dashboards/admin/published-book/PublishedBook';
import ViewFeedbackSuggestion from './components/dashboards/admin/view-feedback-suggestion/ViewFeedbackSuggestion';
import ViewComplaint from './components/dashboards/admin/view-complaint/ViewComplaint';
import AuthorPublishedBook from './components/dashboards/author/author-published-book/author-published-book';
import AuthorAllBook from './components/dashboards/author/author-all-book/author-all-book';
import Editor from "./editor/Editor";
import Template from "./editor/templates/Template";
import Favourite from './components/dashboards/user/favourite/Favourite';


function App() {
  return (
    <div className="App">
      {/* <UserLogin /> */}
      {/* <UserSignup /> */}
      {/* <AuthorLogin /> */}
      {/* <ProofreaderLogin /> */}
      {/* <AdminLogin /> */}


      {/* <UserDashboard /> */}
      {/* <AdminDashboard /> */}
      {/* <AuthorDashboard /> */}
      {/* <ProofreaderDashboard /> */}

      {/* <FeedbackSuggestion /> */}
      {/* <Complaint /> */}
      {/* <BookGallery /> */}
      {/* <AddProofreader />  */}
      {/* <ViewAllUser /> */}
      {/* <PublishedBook /> */}
      {/* <ViewFeedbackSuggestion /> */}
      {/* <ViewComplaint /> */}

      {/* <AuthorPublishedBook /> */}
      {/* <AuthorAllBook /> */}
      {/* <Editor /> */}
      {/* <Template /> */}


      <Routes>
        {/* login/signup */}
        <Route path="/userlogin" element={<UserLogin />}> </Route>
        <Route path='/usersignup' element={<UserSignup />}></Route>
        <Route path='/authorlogin' element={<AuthorLogin />}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/proofreaderlogin' element={<ProofreaderLogin />}></Route>

        {/* Dashboards */}
        <Route path='/user/dashboard' element={<UserDashboard />}></Route>
        <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
        <Route path='/author/dashboard' element={<AuthorDashboard />}></Route>
        <Route path='/proofreader/dashboard' element={<ProofreaderDashboard />}></Route>

        {/* Feedback, suggestion and complaint */}
        <Route path='/feedbacksuggestion' element={<FeedbackSuggestion />}></Route>
        <Route path='/complaint' element={<Complaint />}></Route>

        {/* User */}
        <Route path='/user/bookgallery' element={<BookGallery />}></Route>
        <Route path='/user/favourite' element={<Favourite />}></Route>

        {/* Admin */}
        <Route path='/admin/addproofreader' element={<AddProofreader />}></Route>
        <Route path='/admin/viewalluser' element={<ViewAllUser />}></Route>
        <Route path='/admin/publishedbook' element={<PublishedBook />}></Route>
        <Route path='/admin/viewfeedbacksuggestion' element={<ViewFeedbackSuggestion />}></Route>
        <Route path='/admin/viewcomplaint' element={<ViewComplaint />}></Route>

        {/* Author */}
        <Route path='/author/publishedbook' element={<AuthorPublishedBook />}></Route>
        <Route path='/author/allbook' element={<AuthorAllBook />}></Route>
        <Route path='/author/editor' element={<Editor />}></Route>
        <Route path="/author/template" element={<Template />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
