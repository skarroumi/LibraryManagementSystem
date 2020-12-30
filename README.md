# LibraryManagementSystem - NodeJS / ExpressJS
This is the server-side of an application for Library Management System for Al Akhawayn University following MVC.


## REQUIREMENTS

### Functional
- The website should provide support for two types of users:
o Library Manager: can be an AUI student working Part-time or a university
recruited employee. The application should not have more than 5 active
managers.
o Student: Any AUI student with an active ID.
- For Managers, the application should allow the following: o Add, Delete, Update Books.
o Show all the borrowed books, with overdues.
o Respond to the non-availability requests.
o Place students on prohibition or clearance.
- Students should be able to perform the following actions:
o Search for books.
o Request to borrow a book at an exact date.
o Confirm book returns.
o If a book is not available, student can provide more details of the book and place a
request to the library to make the book available.
o If a book is available in the library but not accessible for borrowing requests, the student should be able to place himself/herself in a waitlist.
- Borrowing Rules:
o Students can have a maximum of two active books borrowed. o The default period for borrowing a book is 3 days
§ If the student doesn’t return the book after 3 full days, he will be charged 3 DH from his cash wallet for every day.
§ If the student explicitly specifies a longer duration than 3 days while initiating a borrow request, he will be charged 1.5 DH every day and not 3 DH.
- Accounts Management:
o Students can create accounts by providing their ID, university email (ending with
@aui.ma), name, division (undergraduate or graduate) and a password of their
choice.
o When a user creates a new account, he will receive a confirmation email to
validate account creation, if the account is not validated in 5 hours, it will be
permanently erased.
o Managers’ accounts are added manually to the database by the school
administration when a student is assigned a library manager job or if an external person is being recruited to fulfill this job.

### Non-Functional
- Usability:
o The website’s design should be responsive to provide smoother experience on all
devices.
o Requests and tasks are shared and synced between the different managers. o The interface should be minimal with no unnecessary features, buttons, or
information to prevent the interactivity experience from being overwhelming.
- Performance: The system should score at least 70% in the Google Lighthouse performance metric.
- Scalability: The application should be able to preserve performance when the load grows by scaling out, at a fairly reasonable cost.

- Security:
o Students are not supposed to see identity of other students who are borrowing a
book or the waitlist data.
o Students and managers cannot use the system if they are not authenticated o Only one manager can be connected at a given period.
o Secure the data traffic by enforcing HTTPS and the use of SSL
o High availability must be ensured and no SPoF should be found
- Integration: The architecture of the website should allow for usage of external web service to help managers insert books information or add books cover images by simply giving the ISBN of the book.

## Architecture
![PhysicalArchitecture](https://user-images.githubusercontent.com/42331845/103322634-23443600-4a3f-11eb-8871-5df3b3fd89d9.png)
## Design
