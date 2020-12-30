# LibraryManagementSystem - NodeJS / ExpressJS
This is the server-side of an application for Library Management System for Al Akhawayn University following MVC.


## Requirements

### Functional Requirements
+ The website should provide support for two types of users:
  + Library Manager: can be an AUI student working Part-time or a university
recruited employee. The application should not have more than 5 active
managers.
  + Student: Any AUI student with an active ID.
  
+ For Managers, the application should allow the following: 
  + Add, Delete, Update Books.
  + Show all the borrowed books, with overdues.
  + Respond to the non-availability requests.
  + Place students on prohibition or clearance.
  
+ Students should be able to perform the following actions:
  + Search for books.
  + Request to borrow a book at an exact date.
  + Confirm book returns.
  + If a book is not available, student can provide more details of the book and place a
request to the library to make the book available.
  + If a book is available in the library but not accessible for borrowing requests, the student should be able to place himself/herself in a waitlist.
  
+ Borrowing Rules:
  + Students can have a maximum of two active books borrowed. 
  + The default period for borrowing a book is 3 days
    + If the student doesn’t return the book after 3 full days, he will be charged 3 DH from his cash wallet for every day.
    + If the student explicitly specifies a longer duration than 3 days while initiating a borrow request, he will be charged 1.5 DH every day and not 3 DH.
    
+ Accounts Management:
  + Students can create accounts by providing their ID, university email (ending with
@aui.ma), name, division (undergraduate or graduate) and a password of their
choice.
  + When a user creates a new account, he will receive a confirmation email to
validate account creation, if the account is not validated in 5 hours, it will be
permanently erased.
  + Managers’ accounts are added manually to the database by the school
administration when a student is assigned a library manager job or if an external person is being recruited to fulfill this job.

### Non-functional Requirements
+ Usability:
  + The website’s design should be responsive to provide smoother experience on all
devices.
  + Requests and tasks are shared and synced between the different managers. 
  + The interface should be minimal with no unnecessary features, buttons, or
information to prevent the interactivity experience from being overwhelming.

+ Performance: The system should score at least 70% in the Google Lighthouse performance metric.

+ Scalability: The application should be able to preserve performance when the load grows by scaling out, at a fairly reasonable cost.

+ Security:
  + Students are not supposed to see identity of other students who are borrowing a
book or the waitlist data.
  + Students and managers cannot use the system if they are not authenticated o Only one manager can be connected at a given period.
  + Secure the data traffic by enforcing HTTPS and the use of SSL
  + High availability must be ensured and no SPoF should be found
  
+ Integration: The architecture of the website should allow for usage of external web service to help managers insert books information or add books cover images by simply giving the ISBN of the book.

## Architecture
![PhysicalArchitecture](https://user-images.githubusercontent.com/42331845/103322634-23443600-4a3f-11eb-8871-5df3b3fd89d9.png)

## Design

### Class Diagrams

+ Model Class Diagram
![Model Class Diagram](https://user-images.githubusercontent.com/42331845/103323449-2ccf9d00-4a43-11eb-80b6-3d20922a38b6.png)

+ Models and Services Class Diagram
![Models and Services Class Diagram](https://user-images.githubusercontent.com/42331845/103323450-2e00ca00-4a43-11eb-9bb3-49cf78bfb353.png)

### Sequence Diagrams

+ Data-driven Sequence Diagram
![Data-driven Sequence Diagram](https://user-images.githubusercontent.com/42331845/103323447-2c370680-4a43-11eb-9752-56c2585e4a65.png)

+ Service-driven Sequence Diagram
![Service-driven Sequence Diagram](https://user-images.githubusercontent.com/42331845/103323451-2e996080-4a43-11eb-9e0c-77f1429f0c12.png)
