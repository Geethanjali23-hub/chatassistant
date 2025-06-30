const chatbotContent = {
    greeting: "Hi there! I'm your website guide. Please select one of the following options:",
    options: [
        {
            id: 'dashboard',
            name: 'Dashboard',
            features: [
                {
                    id: 'branchDetails',
                    name: 'View Branch Office Details',
                    details: `Here’s what you can see:<br>
  <b> Branch Office Name: </b> hoc<br>
  <b>Company Status: </b> In Liquidation<br>
  <b>Location: </b>hyd<br>
  <b>Registration Number: </b>345<br>
  <b>VAT ID: </b> 4567<br>
  <b>Address: </b> thub<br>

  <b>Incorporation Date</b>: rtyu<br>
  <b>Number of Employees</b>: 10<br>
  <b>Subsidiaries</b>: 10 subsidiaries<br>
  To check, <b>Naviagte to the left sidebar and click on Dashboard</b>. or <b>click</b> here for redirecting <a href="https://clientdashboard.houseofcompanies.co.in/dashboard" target="_blank" rel="noopener noreferrer">View Dashboard</a>


`
                },
                {
                    id: 'expansion',
                    name: 'Explore Expansion Opportunities',
                    details: `<b>Your global empire awaits! Click on any city below to embark on your expansion journey:</b><br>

Amsterdam, Netherlands – Branch Office<br>
Status: Active<br>
Market Size: €908B GDP<br>
Corporate Tax: 15%-25.8%<br>
<br>

Berlin, Germany – Tax ID<br>
Status: Pending<br>
Market Size: €3.5T GDP<br>
Corporate Tax: 15%<br>
<br>

Paris, France – Virtual Office<br>
Status: Under Consideration<br>
Market Size: €2.63T GDP<br>
Corporate Tax: 25%<br>
<br>

Madrid, Spain – Legal Entity<br>
Status: Under Consideration<br>
Market Size: €1.28T GDP<br>
Corporate Tax: 25% <br>

Rome, Italy – Virtual Office<br>
Status: Open<br>
Market Size: €1.89T GDP<br>
Corporate Tax: 24%<br>
<br>

To check, <b>Naviagte to the left sidebar and click on Dashboard and scroll down to the Expansion Opportunities section.</b>
Engage with your company details and explore new markets to expand your reach. Take the next step in your journey today!<br> or <b>click</b> here for redirecting <a href="https://clientdashboard.houseofcompanies.co.in/dashboard" target="_blank" rel="noopener noreferrer">View Expansions</a>`
                },
                {
                    id: 'editCompany',
                    name: 'Edit Company Details',
                    details: `Need to update your company information? Simply <b>click on the "Edit" button available on your Dashboard to make the necessary changes</b>. <br>

This Dashboard is your gateway to managing and expanding your business with ease. Explore, edit, and expand—your next big opportunity is just a click away! or <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/dashboard" target="_blank" rel="noopener noreferrer">Edit Company Profile</a>!`
                }
            ]
        },
        {
            id: 'companyProfile',
            name: 'Company Profile',
            features: [
                {
                    id: 'overview',
                    name: 'View Overview of the Company',
                    details: `<b>Here's what you can see:</b><br>

<b>Branch Office Name:</b> hoc <br>
<b>Operational Status:</b> In Liquidation<br>
<b>Location:</b> hyd<br>
<b>Registration Number:</b> 345 <br>
<b>Date of Incorporation:</b> rtyu <br>
<b>Fiscal Year End:</b> 2014 <br>
<b>Number of Employees:</b> 10 <br>
<b>Subsidiaries:</b> 10 subsidiaries <br>
<br>
<b>Financial Snapshot:</b><br>
<b>VAT Number:</b> 4567<br>
<b>Share Capital:</b> rty<br>
<b>First Book Year End:</b> 2025<br>
<br>
<b>Contact & Address:</b><br>
<b>Email:</b> ankithapaladugu@gmail.com<br>
<b>Phone:</b> 8374054175<br>
<b>Website:</b> www.hoc.in<br>
<b>LinkedIn:</b> gvb<br>
<b>Registered Address:</b> thub<br>
<b>Business Address:</b> thub<br>
<br>
<b>Upcoming Deadlines:</b>
Currently, there are no upcoming deadlines. You're all caught up!<br>
<br>
To check, <b>Naviagte to the left sidebar and click on Company Profile->Company Overview </b><br>
 or <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/generate-forms" target="_blank" rel="noopener noreferrer">Company Profile</a>!`
                },
                {
                    id: 'legalCompliance',
                    name: 'Legal & Compliance Information',
                    details: `<b>Understanding your tax registration is crucial for maintaining compliance. Here’s what you need to know:</b><br>

<b>Tax Registration:</b><br>
<b>VAT Number:</b> 4567<br>
<b>VAT Filing Frequency:</b> Monthly<br>
<b>VAT Filing Months:</b> 2<br>
<b>Corporate Tax Number:</b> 345<br>
<b>Employer Registration:</b> Yes<br>
<b>Employer Number:</b> dfgh<br>
<br>
<b>Fiscal Information:</b><br>
<b>Fiscal Year End:</b> 2014<br>
<b>First Book Year End:</b> 2025<br>
<b>Annual Accounts Filing Deadline:</b> 12-09-2025<br>
<b>Corporate Tax Return Deadline:</b> gh<br>
<br>
<b>Bank Details:</b><br>
<b>Bank Name:</b> vbn<br>
<b>Account Number (IBAN):</b> 5678<br>
<b>BIC/SWIFT:</b> vgbhn<br>
To check, <b>Naviagte to the left sidebar and click on Company Profile->Legal&Compliance</b>
 or just <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/generate-forms" target="_blank" rel="noopener noreferrer">Legal & Compliance Information</a>!`
                },
                {
                    id: 'financialDetails',
                    name: 'Financial Details',
                    details: `<b>Capital Structure:</b><br>
<b>Authorized Capital:</b> as<br>
<b>Issued Capital:</b> 567<br>
<b>Paid-Up Capital:</b> 567<br>
<b>Total Number of Shares:</b> t7i<br>
<b>Nominal Value per Share:</b> 5678<br>
<br>
<b>Shareholding Structure:</b><br>
<b>Shareholder:</b> ewrtyu<br>
<b>Type:</b> Corporate<br>
<b>Shares:</b> 345<br>
<b>Ownership Percentage:</b> 1015%<br>
<b>Total Shares:</b> 345 (100%)<br>
To check, <b>Naviagte to the left sidebar and click on Company Profile->Financial Details</b>
or just <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/generate-forms" target="_blank" rel="noopener noreferrer">Financial Details</a>!`
                },
                {
                    id: 'management',
                    name: 'Management & Ownership',
                    details: `<b>Directors</b>:
Ankitha - ankithapaladugu@gmail.com | 08374054175 | Appointed: May 14, 2025<br>
Akshitha Pottumuthu - ammuakki62@gmail.com | 7416363886 | Appointed: May 14, 2025<br>
Rohini - rohinireddy2202@gmail.com | 1234567891 | Appointed: May 19, 2025<br>
Pramoditha - p@gmail.com | fghj | Appointed: June 9, 2025<br>
<br>
<b>Shareholders:</b><br>
<b>Name:</b> ewrtyu<br>
<b>Type:</b> Corporate<br>
<b>Shares Held:</b> 345<br>
<b>Ownership:</b> 1015%<br>
To check, <b>Naviagte to the left sidebar and click on Company Profile->Management & Ownership</b>
or just <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/generate-forms" target="_blank" rel="noopener noreferrer">Management & Ownership</a>!`
                }
            ]
        },
        {
            id: 'applications',
            name: 'Applications',
            features: [
                {
                    id: 'vatRegistration',
                    name: 'Register for VAT',
                    details: `<b>To obtain a VAT Identification Number for companies and businesses in the Netherlands, the following details are required:</b> <br> 
                    <br>
  <b>1.Sales & Activity Information (Checklist Section):</b> Be prepared to answer Yes/No to the following business activities:<br>
  Do you sell goods to private individuals in the Netherlands?<br>  
  Do you sell goods from the Netherlands to private individuals in other EU countries?<br>   Do you sell goods in the Netherlands to other foreign entrepreneurs?<br>
  Do you make intra-Community supplies (goods sold from NL to other EU countries)?<br>   Do you transfer your own goods from NL to other EU countries?<br>
  Do you sell goods from NL to customers outside the EU?<br>
  Do you make intra-Community acquisitions (ICA) in the Netherlands?<br>   Have you received invoices with Dutch VAT reversed to you?<br>
  Do you have other VAT-liable deliveries in the Netherlands (even at 0%)?<br>   Do you charge VAT for services provided in the Netherlands?<br>
<br>
  <b>2.Company Details</b><br>
<b>You must provide:</b><br>
  Legal Name of the company<br>   Trade Name (if different)<br>
  Start Date of the business (DD/MM/YYYY)<br>
  Legal Form (One-man business / Other – specify)<br>   Business Address (Street, postcode, city, country)<br>Telephone number<br>
  Email address<br>
  <b>Website URL Additionally, confirm:</b><br>
  Do you have a one-man business?<br>
  Do you have an authorized representative?<br>
  <br>
<b>3.Correspondence Preferences<br></b>
Address to receive correspondence:<br>
  Business, home, authorized rep, or other Preferred language:
  Dutch / German / English<br>
  <br>
<b>4.Dutch Registration History<br></b>
Has your business ever been registered with the Dutch Tax and Customs Administration before?
  Yes / No<br>
  <br>
<b>5.Home Country Registration (for EU-based companies only)</b>
VAT ID number in your home country (if applicable)<br>
<br>
<b>6.Business Activity Details</b><br>
Sector your business is active in (in your home country) 
  Activities of your business in the Netherlands.<br>
If providing services in NL, who are they for? (Businesses / Private individuals / Both) <br>  Start date of your activities in NL (DD/MM/YYYY)<br>
<br>
<b>7.Bank Account Details (for VAT refunds)</b><br>
  IBAN or Account Number (no savings accounts)  <br> Account holder's name<br>
  Bank address (Street, postcode, city, country) <br>  Bank Name
  Bank Location<br>
  Country of the Bank <br>  BIC/SWIFT Code <br>
  <br>
<b>8.Signature Section</b>
  Name of the signee<br>   Phone number<br>
  Date of signing (DD/MM/YYYY)<br>   Signature bo <br>
  Indicate the number of enclosures included<br>
  <br>
<b>By gathering these details, you will be well-prepared to apply for your VAT Identification Number in the Netherlands. Just follow these quick and easy steps:</b><br>
<br>
1.Go to the left sidebar and click Applications -> VAT ID Application to get started.<br>
2.Enter all the necessary details in the form. (You can also view the Recent VAT Form Submissions also).<br>
3.After finishing the form, click on Generate VAT Form PDF.<br>
<br>It creates your VAT ID as a PDF that you can save. If something isn’t clear or you need help just ask, happy to help!<br>
To check, <b>Naviagte to the left sidebar and click on Applications->VAT ID Application->start Application</b>
or just <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/vat" target="_blank" rel="noopener noreferrer">VAT Registration</a>!`
                },
                {
                    id: 'branchRegistration',
                    name: 'Complete Branch Registration',
                    features: [

                        {
                    id: 'Navigation',
                    name: 'Navigation',
                    details: ` We're glad to help you wrap up your Dutch branch registration.<br> To get started,<b> head over to the left sidebar.
Choose Applications ->Branch Registration Application->start Application </b>or just <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/dutch-branch-registration" target="_blank" rel="noopener noreferrer">Branch Registration</a>!`
                },
                {
                    id: 'Upload your required documents',
                    name: 'Upload your required documents',
                    details: `To start, <b>head to the left menu and choose Applications → Branch Registration Application → Document Upload.</b> or just <b>click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/dutch-branch-registration" target="_blank" rel="noopener noreferrer">VAT Registration</a>
Once you're there, please upload your filled-out and signed KvK forms along with your supporting documents.<br>
<br>
Upload your signed and completed KvK forms here. Make sure every form includes proper signatures and has been
legalized with an apostille. Here's what you need to provide:<br>

<b>Form 6: Registration of a Non-Resident Legal Entity</b><br> <b>Requirements for Filling Form 6:</b> <br>
Form 6 is used to register a non-resident legal entity in the Netherlands. It captures essential company details such as legal structure, business activities, address, contact information, and staffing. This registration is necessary for foreign companies that want to operate or establish a legal footprint in the Netherlands without opening a separate Dutch company. Below, you will find a comprehensive breakdown of what you need to prepare before starting your application.
<br>
<b>1.Company Registration Type</b><br>
  Choose: A new company or Continuation of an existing company<br>
  Official starting date: Specify the date the company will commence operations in the Netherlands (format: DD- MM-YYYY).<br>
<b>2.Company Activity & Business Information</b><br>
  Trade name(s): List the name(s) you will use in the Netherlands.<br>
  Business activities: Provide a short description (e.g., "wholesaler in outer clothing").<br>
  Sales Information: Indicate whether the company engages in:   Selling products to consumers (retail)<br>
  Selling products to other businesses (wholesale)<br>   Importing products<br>
  Exporting products<br>
<b>3.Company Address & Contact Information</b><br>
  Full address: Provide the principal place of business in the Netherlands.<br>
  Postal address: If different from the main address.<br>
  Contact numbers: Include up to two phone numbers and a fax number (if applicable).<br>
  Website: Provide the URL.<br>
  Email address: Ensure a valid email is included.<br>
  Message Box name: For receiving official electronic communication.<br>
  Number of employees: Specify full-time (15+ hrs/week) and part-time (less than 15 hrs/week).<br>
<b>4.Legal Entity Details</b><br>
  Legal form: Specify the type (e.g., British Ltd, German GmbH).<br>
  Company name: Provide the registered name of the legal entity.<br>
  Tax Authority: Confirm if the entity is known to the Dutch Tax Authority (Yes/No).<br>
  Foreign registration number: Include if applicable.<br>
  Register details: Name of the register, registering institution, and its location.<br>
  Formal registration: Confirm if the company is registered abroad (Yes/No).<br>
  EEA company: Indicate if it has divided share capital (Yes/No).<br>
  Incorporation details: Provide the country/state of incorporation and registered office location.<br>
  Issued capital amount: Include the amount issued.
<br>
<b>5.Signature</b><br>

  Authorized representative: Full surname and initials.<br>
  Date of signing: (format: DD-MM-YYYY).<br>
  Legalization: Must be signed on the last page and legalized by a Notary.<br>
<b>6.Non-Mailing Preference</b><br>
        Opt-out option: Indicate if you wish to opt-out of unsolicited advertising or sales at your registered address.<br>

<b>7.Act Waadi (Temporary Workforces)</b><br>

  Labor provision: Confirm if the company provides manpower/labor under the Dutch Waadi Act (Yes/No).<br>

<b>8.Additional Declarations</b><br>

  Directors/partners registration: Confirm if all have been registered using the correct forms (Forms 10/11) (Yes/No).<br>
  Supervisory Board: Indicate if the company has one (Yes/No).<br>
  Branches in Netherlands: Confirm if multiple branches exist (Yes/No).<br>
  Administrator: Specify if there is an administrator in the Netherlands (Yes/No).<br>
  Power of attorney holders: Confirm if any have been assigned (Yes/No).<br>

<b>9.Documentation Required</b><br>

  Original foreign registration certificate: This should be translated if not in Dutch, English, German, or French.<br>
  Proof of identity: Of the authorized representative.<br>
  Notarized signature: On this form.<br>
  Supporting forms: Include any relevant forms (e.g., Form 10 or 11 for directors).<br>
  <br>
By preparing these requirements in advance, you can streamline your registration process and ensure compliance with Dutch regulations. <br>For further assistance or to access the necessary forms, please visit Dutch Business Registration or contact a local representative.
After finishing the form, click on Generate PDF. If something isn’t clear or you need help just ask, happy to help!<br>
<b>To start, head to the left menu and choose Applications → Branch Registration Application → Document Upload→KvK forms→form 6<br></b>
<br>
 
<b>Form 9: Registration of a Branch Office</b><br> <b>Requirements for Filling Form 9</b><br>
Form 9 is used to register a branch office of a foreign company in the Netherlands. It documents key details about the branch’s business activities, address, contact information, and staff. Submitting this form to the Dutch Business Register (KVK) officially establishes the local presence of your company in the Netherlands, allowing it to legally conduct operations there.This guide outlines the essential requirements for completing Form 9, ensuring a smooth registration process.
<br><b>1.Company Details</b><br>

  Legal Company Information:<br>
  Legal name of the foreign company<br>
  Principal place of business (headquarters location abroad)<br>
  Dutch Business Register Status:<br>
  Indicate whether the company is already registered in the Dutch Business Register →Options: Yes / No<br>

<b>2.New Branch or Continuation</b><br>

Branch Type: Is this registration for:<br> 
                  A new branch<br>
                A continuation of an existing branch<br>

<b>3.Branch Details</b><br>
Principal Place of Business:<br>
   Is this branch the main office in the Netherlands?→Options: Yes / No<br>
Trade Name(s):<br>
 
  Does the branch operate under:  <br>
   One trade name or Several trade names<br>
  Description of Activities:<br>
  Provide a specific description of the branch’s activities (e.g., "wholesaler in outer clothing" instead of just "clothing sales").<br>
  Most Important Activity: If multiple services/products, indicate the primary one.<br>
  Business Operations: Choose Yes / No for the following:<br>
  Does the branch sell to consumers (retail)?<br>
  Does the branch sell to other businesses (wholesale)?<br>   Does the branch import products?<br>
  Does the branch export products?<br>
  Branch Address:  Full Dutch branch address (attach supporting lease or land registry document if not owned by a director).<br>
  Separate Mailing Address or P.O. Box:  If applicable, provide this information.<br>
  Contact Details:<br>
  Telephone number(s) <br>  Fax number (optional) <br>  Website (URL)<br>
  Email address<br>
  Employee Count:<br>
  Number of persons working:<br>
  Full-time (15+ hours/week)<br>
  Part-time (<15 hours/week)<br>
  Include directors, temps, family members involved in work.<br>

<b>4.Signature Section</b><br>

  Declaration and Signature:<br>
  Must be signed by an authorized person, such as:   Owner of a sole proprietorship<br>
  Partner in a partnership (V.O.F., C.V.)   Board member of a legal entity<br>
  Civil-law notary<br>
  Attach a copy of valid proof of identity of the signer (accepted IDs: Passport, Dutch driving license, European ID card, Alien’s ID card).<br>

<b>5.Additional Information</b><br>

Appointment of Authorized Person:<br>
->Has someone been appointed to act on behalf of the branch (with power of attorney)?→Options: Yes / No <br> 
->If yes, further forms (usually Form 11) may need to be filled for each authorized representative.<br>
By following these guidelines meticulously, you can ensure that your branch office registration process is efficient and compliant with Dutch regulations. Ready to get started? Fill out Form 9 now!<br>
After finishing the form, click on Generate PDF.If something isn’t clear or you need help just ask, happy to help!<br>
<b>To start, head to the left menu and choose Applications → Branch Registration Application → Document Upload→KvK forms→form 9</b>
<br>

<b>Form 11: Registration of an Official of a Legal Entity</b><br><b> Requirements for Filling Form 11</b>
Form 11 is used to register the directors, board members, or other officials who are authorized to represent your company in the Netherlands. By submitting this form to the Dutch Business Register (KVK), you formally declare who holds official responsibilities and decision-making authority within your legal entity. This ensures legal recognition and compliance with Dutch corporate regulations.
<br>Here's a breakdown of the essential sections you will encounter while filling out Form 11:
<b>1.Company Identification</b><br>
Details to be provided:<br>
•	Name of the legal entity.<br>
•	Registered office location (town/city).<br>
•	KVK Registration Status:<br>
o	If already registered → Provide the KVK number.<br>
o	If not yet registered → Submit this form along with the company registration form.<br>
<b>2.Type of Official</b><br>
Choose one:<br>
•	Natural Person → Proceed to Section 3.<br>
•	Partnership or Legal Entity → Proceed to Section 7.<br>
<b>3. Details for a Natural Person</b><br>
Mandatory Information:<br>
•	Surname<br>
•	Full given names<br>
•	Citizen Service Number (BSN)<br>
•	Date of birth (in DD-MM-YYYY format)<br>
•	Place of birth<br>
•	Country of birth (if outside the Netherlands)<br>
•	Gender (male or female)<br>
•	Private residential address (must match Dutch municipal records)<br>
<br><b>Important Notes:</b><br>
•	Officials with a director’s role must personally visit a KVK office with valid proof of identity.<br>
•	Accepted proof of identity:<br>
o	Dutch driving license<br>
o	European identity card<br>
o	Passport<br>
o	Foreign Nationals Identity Card<br>
Signature Requirement:<br>
Must be signed in person (wet-ink signature only).<br>
<b>4. Position Held by the Official</b><br>
Select the appropriate position:<br>
•	Supervisory Board Member<br>
•	Liquidator<br>
•	Sole Shareholder (only) → If selected, proceed directly to the date of appointment (4.5).<br>
•	Director<br>
More Details:<br>
•	Indicate if the official is also the sole shareholder → Yes / No.<br>
•	If the official holds a statutory title (such as Managing Director), specify it.<br>
•	Specify the type of authority:<br>
o	No Authority<br>
o	Sole Authority<br>
o	Joint Authority<br>
•	Date when the official took up the position (DD-MM-YYYY format).<br>
•	Indicate whether more officials need to be registered → Yes / No.<br>
<b>7. Details for a Partnership or Legal Entity</b><br>
Details to provide:<br>
•	Name of the partnership or legal entity.<br>
•	Address.<br>
•	KVK Number (if registered).<br>
If registered abroad:<br>
•	Foreign registration number.<br>
•	Name of the foreign register.<br>
•	Name, place, and country of the registering authority.<br>
Supporting Documents:<br>
•	Proof of registration not older than one month.<br>
•	Copy of valid proof of identity of the person signing on behalf of the partnership or legal entity.<br>
Signature Requirement:<br>
Must be signed in person (wet-ink signature only) by one of the partners (for vof/cv) or a director (for a legal entity).<br>
<b>Section 8. Position Held by the Official (for Legal Entities)</b><br>
Select the appropriate position:<br>
•	Supervisory Board Member<br>
•	Liquidator<br>
•	Sole Shareholder (only) → If selected, proceed directly to the date of appointment (8.5).<br>
•	Director<br>
More Details:<br>
•	Indicate if the official is also the sole shareholder → Yes / No.<br>
•	If the official holds a statutory title (such as Managing Director), specify it.<br>
•	Specify the type of authority:<br>
o	No Authority<br>
o	Sole Authority<br>
o	Joint Authority<br>
•	Date when the official took up the position (DD-MM-YYYY format).<br>
•	Indicate whether more officials need to be registered → Yes / No.<br>
<b>11. Signature Section</b><br>
Who is eligible to sign the form:<br>
•	A director of a newly formed legal entity (not yet registered).<br>
•	A registered director of an existing legal entity.<br>
•	A civil-law notary.<br>
Required Details:<br>
•	Surname and initials<br>
•	Email address<br>
•	Telephone number<br>
•	Date (DD-MM-YYYY format)<br>
•	Wet-ink signature only (copies are not accepted).<br>
Required Document:<br>
•	Valid proof of identity (passport, Dutch driving license, European identity card, or Foreign Nationals Identity Card).<br>
12. UBO (Ultimate Beneficial Owner) Declaration<br>
Requirement:<br>
•	Indicate whether the registration involves one or more officials who are also Ultimate Beneficial Owners (UBOs) → Yes / No.<br>
•	UBOs must be registered immediately via KVK.<br>
Required Documents to Bring<br>
For natural person officials:<br>
Valid proof of identity.<br>
For foreign legal entities:<br>
•	Certificate of registration (not older than one month).<br>
•	Original proof of private address.<br>
•	A4-sized copy of valid proof of identity (with photo blurred) of the person signing the form.<br>
For sole shareholder registrations:<br>
•	Share transfer deed signed by a notary (not required if a civil-law notary signs the form).<br>
For foreign sole shareholders:<br>
•	Recent certificate of registration in a readable language.<br>
For liquidator registration:<br>
•	Signed resolution to dissolve with complete meeting minutes.<br>
Important Notes<br>
•	All changes to the registered information must be reported to KVK within one week.<br>
•	After completing the form, generate a PDF, print it, sign it, and submit it to KVK along with all required identification and supporting documents.<br>


<b>Form 13: Registration of Authorised Person</b><br><b> Requirements for Filling Form 13</b><br>
Form 13 is used to register an authorized representative or business agent who is not part of the company’s official management but is legally empowered to act on its behalf in the Netherlands.<br> This form is typically used by foreign or Dutch companies to appoint someone for signing contracts, handling legal matters, or managing local operations. It ensures that the representative is officially recognized by the Dutch Business Register (KVK).<br>
To effectively complete Form 13, you'll need to gather specific information and documentation. Below is a structured breakdown to guide you:<br>

<b>1.Details of the Authorizing Organization</b><br>

  Identify the company or legal entity granting the authorization.<br>
  Organization Name: Provide the full name of the company along with its place of establishment (city and country).<br>
  KVK Registration Status: Indicate whether the company is registered with the Dutch KVK (Chamber of Commerce). Options: No/Yes → Provide the KVK number.<br>

<b>2.Type of Authorization: Specify the role of the authorized person.</b><br>
  Select the Type:<br>
  Authorized Representative<br>
  Authorized Business Agent (self-employed person mediating agreements on behalf of the entity).<br>

<b>3.Details of the Authorized Person</b><br>
  Enter identity and registration details of the person or entity receiving authorization.<br>
3.1	Entity Type:<br>
  Natural person → Proceed to section 3.2<br>
  Legal entity or partnership → Proceed to section 3.4<br>

3.2	Authorized Representative’s Personal Information (Natural Person)<br>

Required Information:   Surname<br>
  First name(s)<br>
  Citizen Service Number (BSN) – mandatory. <br>
  Date of birth<br>
Place and country of birth<br>   Gender<br>
  Private address – must be accurate as per Dutch municipal records.<br>
3.3	Signature of authorised representative<br>

3.4,3.5,3.6 If Authorization Is Granted to a Legal Entity or Partnership<br>

  Details Needed:<br>
  Name and address of the legal entity.   KVK registration status (if applicable).<br>
  Foreign entity registration details if not registered with KVK.<br>

<b>4.Contents of Authorization</b><br>

  Define the nature, scope, and limits of the authorization.<br>
  Key Details:<br>
  Title/Function of the Authorized Representative   Date Authorization Became Effective<br>
  Authorization Scope: Full or Limited (specify limitations).<br>
  Scope of Application: Entire company or specific branches.<br>

<b>5.Signature Section</b><br>

  Formalize the registration by a legally recognized individual.<br>
  Who Can Sign: Owner of a sole proprietorship, managing director of a legal entity, etc.<br>
  Information to Provide: Surname, email address, phone number, date of signing, and a wet-ink signature.<br>

<b>6.Related Forms and Declarations</b><br>
  Ensure completeness of submission. Options:<br>
  If for an association or foundation without a commercial company, submit accordingly.<br>

<b>7.Documentation Required</b><br>
  Necessary Documents:<br>
  Copy of a valid ID of the authorized representative.   Foreign registration certificate (if applicable).<br>
  Supporting documents as required.<br>
After completing the form, if submitting for a company, make an appointment at a KVK office. <br>For foundations or associations without commercial activity, send via post with identification.<br>
To start your application, <b>navigate to: Applications → Branch Registration Application → Document Upload → KvK forms → Form 13.</b><br>
Once all sections are filled, click on Generate PDF.<br>
For further assistance, don't hesitate to reach out! Your journey towards authorization starts here! `
                },
                {
                    id: 'Shipping Checklist',
                    name: 'Shipping Checklist',
                    details: `This website serves as a vital resource for businesses looking to register their branch office.<br> To facilitate a smooth registration, we have outlined a detailed Shipping Checklist that includes all required documents.we’re here to guide you through the essential post-registration,<b> For more deatils click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/dutch-branch-registration" target="_blank" rel="noopener noreferrer">Shipping Checklist</a>
<br>Document Checklist: To ensure your application is processed efficiently, please prepare the following documents:<br>
  <b>Form 6: Completed and signed.</b><br>
  <b>Form 9: Completed and signed.</b><br>
  <b>Form 11: Completed and signed in two places.</b><br>
  <b>Form 13: If applicable, completed and signed.</b><br>
  Legalized Certificate of Formation / Formation Deed.<br>
   Legalized Operating Agreement / Shareholders Register.<br>
  Legalized Certificate of Incumbency.<br>
  Legalized passport copy for each stakeholder.<br>
  Legalized proof of address for each stakeholder (not older than 20 days).<br>
  Rental agreement for virtual office (if applicable).<br>
  <br>
<b>Shipping Instructions:</b> Follow these essential steps for a successful document submission:<br>
1.Organize all documents in a logical order: forms first, followed by company documents, then personal documents.<br>
2.Use a reliable courier service with tracking capability (e.g., DHL, FedEx, UPS).<br>
3.Include a cover letter listing all enclosed documents.<br>
4.Keep a complete copy of all submitted documents for your records.<br>
5.Retain the tracking information for follow-up purposes.<br>
<br>
<b>Shipping Address:</b> KvK Eindhoven Branch Registration Department<br>
J.F. Kennedylaan 2<br>
5612 AB Eindhoven The Netherlands<br>
+31 88 585 15 85<br>
<br>
<b>Cover Letter Template:</b> To assist you in your submission, here’s a template for your cover letter:<br>

[Your Company Name] <br>[Your Address] <br>[City, Country]<br> [Date]<br>
KvK Eindhoven<br>

Branch Registration Department<br>

J.F. Kennedylaan 2<br>

5612 AB, Eindhoven The Netherlands<br>

Subject: Branch Registration Documents for [Your Company Name]<br>
Dear Sir/Madam,<br>
Please find enclosed the complete set of documents for the registration of our branch office in the Netherlands. We have included the following documents:<br>
Form 6: Registration of a Non-Resident Legal Entity (signed and legalized)<br>
Form 9: Registration of a Branch Office (signed and legalized)<br>
Form 11: Registration of an Official of a Legal Entity (signed and legalized)<br>
Form 13: Registration of an Authorized Representative (if applicable)<br>
Certificate of Formation/Articles of Incorporation (legalized with apostille)<br>
Operating Agreement/Shareholders Register (legalized with apostille)<br>
Certificate of Incumbency (legalized with apostille)<br>
Passport copies for all directors/officials (legalized with apostille)<br>
Proof of address for all directors/officials (legalized with apostille)<br>
 Rental agreement for business address (if applicable)<br>
<br>
Please contact us if any additional information or documentation is required. We look forward to receiving our KvK number and extract.<br>
Sincerely, <br>[Your Name]<br> [Your Position]<br>
[Contact Information]<br>
<br>

This document serves as your guide to ensure a successful registration process. For any questions, feel free to reach out to the contact information provided above. 

 `
                },
                {
                    id: 'Post-Registration Steps',
                    name: 'Post-Registration Steps',
                    details: `<b>Congratulations on successfully completing your branch registration in the Netherlands!</b> we’re here to guide you through the essential post-registration steps to ensure your business is fully set up and compliant. <b>For more deatils click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/dutch-branch-registration" target="_blank" rel="noopener noreferrer">Post Registration steps& Info</a>

<b>Banking Setup</b><br>
<b>Here’s what you need to do:</b><br>
<br>
  Apply for a business account with a Dutch bank (consider options like ING, ABN AMRO, or Rabobank).<br>   Gather your KvK extract, UBO declaration, and ID documents.<br>
  Schedule a bank verification appointment (some banks even offer remote options!).<br>   Don’t forget to submit your IBAN and bank details to the tax authorities.<br>
  Finally, set up your online banking and payment methods for smooth transactions.<br>
<br>
<b>Tax Registration & Compliance</b><br>
Your tax number will be assigned automatically after your KvK registration. Here’s what’s next:<br>   If your turnover exceeds €20,000, make sure to register for VAT.<br>
  Set up a tax filing calendar to stay organized.   If needed, appoint a tax representative.<br>
  Implement a Dutch-compliant bookkeeping system to keep everything in check.<br>
<br>
<b>Accounting Requirements</b><br>
It’s essential to establish an accounting system that meets Dutch regulations:<br>   Use a proper invoice numbering system.<br>
  Prepare for annual financial statements.<br>   Check if your branch needs to be audited.<br>
  Establish processes for expense tracking and documentation.<br>
<br>
<b>Employment & HR (if you plan to hire)</b>
Here’s what you need to do:<br>

  Register as an employer with Dutch tax authorities.<br>   Set up payroll administration.<br>
  Familiarize yourself with Dutch employment laws. <br>  Arrange employee and liability insurance.<br>
  Draft compliant employment contracts.<br>
<br>
<b>Ongoing Compliance<br></b>
To maintain compliance, keep an eye on these key deadlines:<br>
  File annual financial statements with KvK within 12 months of your fiscal year end. <br>  Submit quarterly/monthly VAT returns.<br>
  File corporate income tax returns annually.<br>
  Update the UBO register when ownership changes. <br>  Maintain corporate records and minutes regularly.<br>
<b>Key Deadlines</b><br>
<br>
<b>Within 1 month:</b> Register for VAT (if applicable).<br> Within 3 months: Register as an employer (if hiring).<br> Quarterly: VAT returns.<br>
<b>Within 12 months:</b> File annual accounts with KvK.<br>
<b>Within 30 days:</b> Report changes (officials, address, or activities) to KvK.<br>
By following these steps, you’ll be well on your way to establishing a successful presence in the Netherlands. If you have any questions or need assistance, feel free to reach out to us—we're here to help!
Contact Us for More Information
 `
                },
                
                        
                
             ] }
            ]
        },
        {
            id: 'tasks',
            name: 'Tasks',
            features: [
                {
                    id: 'createTask',
                    name: 'Create New Company Task',
                    details: `For tasks, you can check out groups like Tax, Finance, Company, Legal Agreements, Shipments, and KYC. To begin handling and keeping an eye on your company's tasks,<b> go to the left sidebar and click on Tasks.For more deatils click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/calendar" target="_blank" rel="noopener noreferrer">Tasks Info&creation </a>
Here's the lowdown on making a new task:<br>
<b>1.Create New Company Task</b> <br>
<b>Title:</b> Type in your task title.<br>
<b>Description:</b> Give a short summary of the task.<br>
<b>Deadline:</b> Pick a due date (dd-mm-yyyy).<br>
<b>Priority:</b> Select how urgent it is (like Medium).<br>
<b>Category:</b> Choose a group (such as Company Tax).<br>
<b>Status:</b> Pick where it stands (like Pending).<br>
<b>Assigned To (optional):</b> Write who's responsible.<br>
<b>Company Tags:</b> Add relevant labels such as documentation, policy, operations, or structure.<br>
After you've filled in all the info just hit Create Task. You can check out all your tasks, including the ones in progress, stuck, and finished. <br>You can see all your tasks grouped into Ongoing, Blocked, and Completed tasks. Want to look at everything in one go? Just hit All Tasks! You can also arrange tasks by Priority or Deadline to stay organized.
To check, <b>Naviagte to the left sidebar and click on Tasks->create new Task.</b>
`
                },
    
                        {
                    id: 'All Tasks',
                    name: 'All Tasks',
                    details: `--- `
                },
                 {
                    id: 'Ongoing Tasks',
                    name: 'Ongoing Tasks',
                    details: `--- `
                },
                {
                    id: 'Blocked Tasks',
                    name: 'Blocked Tasks',
                    details: `--- `
                },
                {
                    id: 'Completed Tasks',
                    name: 'Completed Tasks',
                    details: `--- `
                },
            ]
        },
        {
            id: 'documents',
            name: 'Documents',
            features: [
                {
                    id: 'kycDocs',
                    name: 'KYC Documents',
                    features: [ 
                        {
                    id: 'Navigation & KYC Overview',
                    name: 'Navigation & KYC Overview',
                    details: `<b>Just click on the Documents section on the left sidebar then pick KYC Documents → Overview. For more deatils click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/documents/kyc" target="_blank" rel="noopener noreferrer">Navigation & KYC Overview</a><br>
                    This will show your KYC Records and Compliance Status highlighting the number of verified, completed, and incomplete compilations.<br>
                    The KYC Compliance Dashboard shows that out of all records, 3 are verified, 1 is pending, and 12 are incomplete, resulting in an overall compliance rate of 19%. <br>The KYC records include Ankitha, a Director, added on 24/06/2025 with an incomplete status;<br> Akshitha Pottumuthu, also a Director, added on 24/06/2025 with an incomplete status; <br>Rohini, a Manager, added on 24/06/2025 with an incomplete status; and Pramoditha, a Developer, added on 24/06/2025 with an incomplete status. <br>A search option is available to filter through all KYC records.`
                },
                {
                    id: 'KYC Documents',
                    name: 'KYC Documents',
                    details: `<b>To start uploading your KYC documents, you need to pick a representative first. Go to the left sidebar. Select Documents→ KYC Documents→Documents.</b><br>
1. Pick your representative from the given list.<br>
2. After you choose, you'll see options to either upload new documents or look at existing ones.<br>
KYC Documents Required for a Legal Representative:<br>
<b>To complete the KYC process for a legal representative, the following documents are required:</b><br>
•	Passport<br>
•	Address Proof<br>
•	Utility Bill<br>
•	Driving License<br>
`
                },
                {
                    id: 'Legal Representatives',
                    name: 'Legal Representatives',
                    details: ` <b>To view the Legal Representatives, please follow these steps:</b><br>
1.	Navigate to the left sidebar of your dashboard.<br>
2.	Click on Documents.<br>
3.	Select KYC Documents.<br>
4.	Choose Legal Representatives.<br>
You will then be able to access the complete list of legal representatives, along with their details and document status.<br>
<b>Current Legal Representatives:</b><br>
Ankitha – Director<br>
Akshitha Pottumuthu – Director<br>
Rohini – Manager<br>
Pramoditha – Developer<br>
`
                },

                {
                    id: 'KYC Verification',
                    name: 'KYC Verification',
                    details: `<b>Document Collection:</b> Submit all required KYC documents.<br>
<b>Status:</b> Pending<br>
<br>
<b>Initial Review:</b><br>
First review of submitted documents.<br>
<b>Status: Pending</b><br>
<br>
<b>Enhanced Due Diligence:</b><br>
Additional checks for high-risk cases.<br>
<b>Status:</b> Pending<br>
<br>
<b>Final Approval:</b><br>
Final verification and approval of documents.<br>
<b>Status:</b> Pending<br>
<br>
<b>Verification in Progress:</b><br>
Your documents are currently under review.<br>
This process typically takes 3 to 5 business days to complete.`
                },
                       
             ] },





                
                {
                    id: 'financialDocs',
                    name: 'Financial Documents',
                    details: `<b>To upload and view your financial documents, please follow these steps:</b><br>
1.	Navigate to the left sidebar on your dashboard.<br>
2.	Click on Documents ➜ Financial Documents.<br>
<b>You will find the following categories to help you organize your files:</b><br>
•	All Documents<br>
•	Invoices<br>
•	Financial Statements<br>
•	Tax & Compliance<br>
•	Banking & Investment<br>
•	Accounts Payable & Receivable<br>
•	Company Valuation & Shareholding<br>
•	Debt & Loan Documentation<br>
•	Other Documents<br>
By selecting each category, you will be directed to its dedicated page where you can upload and manage your documents.
To check, <b>Naviagte to the left sidebar and click on Documents->Financial Documents.</b>
`
                },
                {
                    id: 'Certificate Generation',
                    name: 'Certificate Generation',
                    details: `<b>To generate certificates, please follow these steps:</b><br>
•	Go to the left sidebar on your dashboard.<br>
•	Click on Documents.<br>
•	Select Generate Certificate.<br>
You can create the following certificates:<br>
<b>1.Share Certificate </b>– Generate share certificates for your company.<br>
<b>2.Declaration of UBO</b> – Prepare a declaration of the Ultimate Beneficial Owner.<br>
To check, <b>Naviagte to the left sidebar and click on Documents->Generate Certificate.</b><br>

 `
                }
            ]
        },
        {
            id: 'mailbox',
            name: 'Mailbox',
            features: [

                {
                    id: 'Mail Navigation',
                    name: 'Mail Navigation',
                    details: ` 1.Go to the left sidebar on your dashboard.<br>
2.Click on MailBox.<br>
3.Choose the desired option:<br>
•	Incoming Mail<br>
•	Outgoing Mail<br>
•	Prepare Shipment<br>
•	Shipments<br>
Or <b>for more deatils click here</b> <a href="https://clientdashboard.houseofcompanies.co.in/mailbox" target="_blank" rel="noopener noreferrer">MailBox</a>
`
                },
                {
                    id: 'incomingMail',
                    name: 'Incoming Mail',
                    details: `<b>To view your incoming mail:</b><br>
•	Go to the left sidebar.<br>
•	Select MailBox → Incoming Mail. <br>The Incoming Mail page allows you to efficiently manage all the letters, packages, and digital documents you have received. You can view important details such as the mail type, document name, and the date received. Convenient actions like downloading, scanning, forwarding, and opening documents are available directly from the interface.<br>
`
                },
                {
                    id: 'outgoing mails',
                    name: 'outgoing mails',
                    details: `<b>To check your outgoing mails:</b><br>
•	Go to the left sidebar.<br>
•	Select MailBox → Outgoing Mail. <br>The Outgoing Email page provides a comprehensive view of all the emails and messages you have sent. It helps you track your outgoing communication.<br>
`
                },
                {
                    id: 'prepareShipment',
                    name: 'Prepare Shipment',
                    details: `Ready to send a shipment? Here’s how:<br>
<b>Go to the left sidebar.<br>
	Select MailBox → Prepare Shipment.</b><br>
	Enter all the required shipment details carefully.<br>
	Once completed, click the Create button to finalize your shipment.<br>
<br>
Required Details:<br>
To create and manage your outgoing shipments, please provide the following information. We will handle the packaging, postage, and delivery.<br>
	Shipment Type: Example: Objection Letter<br>
	Upload: Attach the relevant shipment document.<br>
	<b>Recipient:</b>Recipient Name<br>
	<b>Recipient Address</b><br>
	<b>Delivery Method:</b> Example: Standard<br>
	<b>Shipment Contents:</b> Provide a brief description of the contents of your shipment.<br>
	<b>Tracking Options:</b><br>
	<b>Include Tracking</b><br>
	<b>Delivery Confirmation</b><br>
	<b>Insurance (if required)</b><br>
	<b>Scheduled Date:</b> Format: dd-mm-yyyy<br>
Once all the above details are provided, click the Create Shipment button to complete the process.
`
                },
                {
                    id: 'Outgoing Shipment',
                    name: 'Outgoing Shipment',
                    details: `To track your outgoing shipments:<br>
•	<b>Go to the left sidebar.</b><br>
•	<b>Select MailBox → Shipments.</b><br>
<br>The Outgoing Shipments page allows you to track and manage all shipments sent from your mailbox. Each shipment entry displays important details including the recipient’s name, address, type of shipment, contents, delivery method, tracking options, scheduled shipping date, attached documents, and the current shipment status.
You can quickly view:<br>
•	<b>Recipient and Address</b><br>
•	<b>Shipment Type (e.g., Objection Letter, Extension Letter, Payment Plan Request)</b><br>
•	<b>Shipment Contents</b><br>
•	<b>Delivery Method (Standard or Priority)</b><br>
•	<b>Tracking Options (Tracking, Confirmation, Insurance)</b><br>
•	<b>Scheduled Date</b><br>
•	<b>Attached Documents (with options to view, download, or manage)</b><br>
•	<b>Current Status (Pending, Shipped)</b><br>
<br>The status helps you monitor whether a shipment is pending, shipped, or completed. The Refresh button at the top right keeps your shipment list up to date in real time.<br>
<b>Additional Services:</b> Mailbox services like mail forwarding, mail scanning, and AI document analysis are available to enhance your mail handling experience.
`
                }
            ]
        },

        {
            id: 'tax',
            name: 'Tax',
            features: [
                {
                    id: 'Tax Overview',
                    name: 'Tax Overview',
                    details: `<b>Download Tax Certificates:</b> You can quickly download your tax certificates from this section for reference and submission.<br>
<b>Tax Calculator:</b> Provides a quick estimation of your tax liabilities, allowing you to plan effectively.<br>
<b>Tax Optimization Report:</b> Displays potential tax-saving opportunities such as R&D Tax Credits and VAT Reclaims, along with the estimated savings.<br>
<b>Tax Optimization Opportunities</b><br>
<br>
<b>R&D Tax Credits</b><br>
Your software development activities may qualify for WBSO R&D tax credits.<br>
<b>Potential savings:</b>€12,500<br>
<br>
<b>VAT Reclaim</b><br>
You have unclaimed VAT on international business expenses.<br>
<b>Potential savings:</b>€3,750<br>
<b>To check, Naviagte to the left sidebar and click on Tax->Overview.</b>
`
                },
                {
                    id: 'taxReturns',
                    name: 'Tax Returns',
                    details: `This section allows you to prepare and manage your tax filings.<b> To begin, go to the left sidebar, click Tax, and pick Tax Returns.</b><br>
•	VAT Return:<br>
•	View the applicable tax period, preparation status, and the estimated VAT amount.<br>
•	You can continue the preparation process, which will redirect you to the Advanced VAT Analysis Dashboard for a detailed review.<br>
•	Corporate Tax:<br>
•	Displays the financial year, tax preparation status, and estimated corporate tax.<br>
•	Starting preparation will take you to the Advanced Corporate Tax Dashboard for further processing.<br>
To check, <b>Naviagte to the left sidebar and click on Tax->Tax Returns</b><br>
`
                },
                {
                    id: 'objections',
                    name: 'Tax Objections',
                    details: `	<b>To start, go to the left sidebar and pick Tax then Objection.</b> This takes you to our section for handling tax objections.<br>
	<b>Objection Letters:</b> The platform provides an AI-based tax agent to assist in drafting professional objection letters tailored to your case.<br>
	<b>Upload Tax Assessment:</b> You can upload your tax assessment documents directly for analysis and objection preparation.<br>
	<b>Recent Objections:</b> This section may display recent objections which can provide valuable insights for your current cases.<br>
To check, <b>Naviagte to the left sidebar and click on Tax->Objections.</b>`
                },
                {
                    id: 'Tax Calculations',
                    name: 'Tax Calculations',
                    details: `<b>	Just go to the left sidebar hit Tax, and pick Calculator</b><br>

	<br><b>Corporate Income Tax Calculator:</b><br>
Calculates your projected corporate tax liability based on your expected profits.<br>
Helps in financial planning and resource allocation.<br>
<br>
•<b>VAT Calculator:</b><br>
Assists in computing VAT amounts across various transaction types and jurisdictions.<br>
	Useful for businesses operating across multiple regions.<br>
To check,<b> Naviagte to the left sidebar and click on Tax->Calculations.</b>
`
                },
                {
                    id: 'viesCheck',
                    name: 'VIES VAT Number Validation',
                    details: `<b>This section helps you validate VAT numbers across the European Union using the VAT Information Exchange System (VIES).
Here's how to start:</b> <br>
<b>Open the left sidebar→Tax→VIES Check.</b><br>
	VAT Number Validation:<br>
Enter a VAT number to verify its validity.<br>
	Helps ensure that transactions with European partners are compliant with VAT regulations.<br>
`
                }
            ]
        }
    ]
};

export default chatbotContent;
