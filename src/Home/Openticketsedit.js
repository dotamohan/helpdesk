import React, { Component } from 'react'
import Header from './header'
import DXR1 from '../images/DXR-1.gif'
import Footer from '../Home/footer'

export class Openticketsedit extends Component {
  render() {
    return (
      <div>
      <Header />

      <div className="centerBG" style={{width: '90%'}}>
        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td>
                <table width="100%" border={1}>
                  <tbody>
                    <tr>
                      <td>
                        <a id="lbtnBack" className='openticket-back' href="javascript:__doPostBack('ctl00$MainContent$lbtnBack','')" style={{fontFamily: 'Calibri', fontWeight: 'normal', textDecoration: 'none', fontSize: '16px',paddingLeft: '10px'}}>Go
                          To Ticket List</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="heading_bg"style={{padding:"23px 10px"}} >Assign Task</td>
                    </tr>
                    <tr>
                      <td>
                        <table width="100%" className="table-content" cellPadding="0px" cellSpacing="0px" style={{border: "none"}}>
                          <tbody>
                            <tr>
                              <td className="table-inner">
                                <table className="tdspace">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <table>
                                          <tbody>
                                            <tr id="from">
                                              <td className="auto-style2">From :
                                              </td>
                                              <td className="auto-style1">
                                                <input name="ctl00$MainContent$txtFrom" type="text" defaultValue="ashleylizsurber@gmail.com" readOnly="readonly" id="txtFrom" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}} />
                                              </td>
                                            </tr>
                                            <tr id="trsubject">
                                              <td className="auto-style2">Subject
                                                :
                                              </td>
                                              <td className="auto-style1">
                                                <input name="ctl00$MainContent$txtSubject" type="text" defaultValue="Print Order throughput enhancement" id="txtSubject" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}} />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="auto-style2" />
                                              <td className="auto-style1" />
                                            </tr>
                                            <tr id="clntname">
                                              <td id="tkClientNametd" className="auto-style2">Client
                                                Name :</td>
                                              <td id="tkClientNametd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkClientName" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkClientName\',\'\')', 0)" id="ddlTkClientName" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={34}>
                                                    Backstave VIP
                                                  </option>
                                                  <option value={7}>Center
                                                    for Beautiful Bodies
                                                  </option>
                                                  <option value={29}>Chlw
                                                    Laws</option>
                                                  <option value={14}>
                                                    Compquest Consulting
                                                  </option>
                                                  <option value={4}>Cormac
                                                    Maritime</option>
                                                  <option value={1}>DESSS
                                                    India</option>
                                                  <option value={2}>DESSS
                                                    US</option>
                                                  <option value={20}>Doc
                                                    Aid</option>
                                                  <option value={3}>
                                                    Energia</option>
                                                  <option value={8}>
                                                    Entrust Care
                                                  </option>
                                                  <option value={24}>Fogt
                                                  </option>
                                                  <option value={11}>FSC
                                                    Capital</option>
                                                  <option value={16}>Gulf
                                                    Stream Marine
                                                  </option>
                                                  <option value={15}>House
                                                    Pro</option>
                                                  <option value={19}>
                                                    JaJing</option>
                                                  <option value={23}>Koch
                                                  </option>
                                                  <option value={30}>Kress
                                                  </option>
                                                  <option value={17}>law
                                                    explorers</option>
                                                  <option value={10}>
                                                    Mindset Inc</option>
                                                  <option value={13}>
                                                    National Signs
                                                  </option>
                                                  <option value={22}>NRG
                                                  </option>
                                                  <option value={9}>
                                                    Onestar Network
                                                  </option>
                                                  <option value={35}>Pace
                                                    Concreate</option>
                                                  <option value={5}>
                                                    Quiddle</option>
                                                  <option value={21}>RTUI
                                                  </option>
                                                  <option value={12}>
                                                    Security America
                                                    Mortgage</option>
                                                  <option value={25}>
                                                    SilSolver</option>
                                                  <option value={37}>
                                                    stubboxoffice
                                                  </option>
                                                  <option value={27}>Sweet
                                                    Taste of Texas
                                                  </option>
                                                  <option value={31}>Test
                                                  </option>
                                                  <option value={36}>Texan
                                                    Tool</option>
                                                  <option selected="selected" value={18}>Trophy
                                                    Deals</option>
                                                  <option value={33}>
                                                    txgidocs</option>
                                                  <option value={26}>Vanco
                                                    Ring Gasket
                                                    Specialty</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="usernameid">
                                              <td id="tkNametd" className="auto-style2">User
                                                Name :</td>
                                              <td id="tkNametd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkName" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkName\',\'\')', 0)" id="ddlTkName" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value="auston Surber">
                                                    auston Surber
                                                  </option>
                                                  <option value="Jerry  Surber">
                                                    Jerry Surber
                                                  </option>
                                                  <option value="Ivan Parga">
                                                    Ivan Parga</option>
                                                  <option value="Keziah k">
                                                    Keziah k</option>
                                                  <option selected="selected" value="Ashley Surber">
                                                    Ashley Surber
                                                  </option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="project">
                                              <td id="tkprojecttd" className="auto-style2">Project
                                                :</td>
                                              <td id="tkprojecttd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkproject" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkproject\',\'\')', 0)" id="ddlTkproject" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={1692}>
                                                    ajaerosailxps
                                                  </option>
                                                  <option value={1594}>
                                                    Angular 5 Learning
                                                  </option>
                                                  <option value={1870}>
                                                    Appare</option>
                                                  <option value={1752}>AUT
                                                    Solution</option>
                                                  <option value={1750}>
                                                    Award QB integration
                                                  </option>
                                                  <option selected="selected" value={1341}>Awards
                                                  </option>
                                                  <option value={1585}>
                                                    Awards product
                                                  </option>
                                                  <option value={1830}>
                                                    azure.desss.com
                                                  </option>
                                                  <option value={1469}>B2B
                                                  </option>
                                                  <option value={1466}>B2C
                                                  </option>
                                                  <option value={1796}>
                                                    BackstageRDS
                                                  </option>
                                                  <option value={1782}>
                                                    BackstageVIP
                                                  </option>
                                                  <option value={1765}>
                                                    Bail bond</option>
                                                  <option value={1400}>
                                                    Brain Strom</option>
                                                  <option value={1851}>
                                                    Browser call
                                                  </option>
                                                  <option value={1745}>
                                                    Burn calories
                                                  </option>
                                                  <option value={1633}>
                                                    buyaccesshardware
                                                  </option>
                                                  <option value={1426}>
                                                    Buytoneronline
                                                  </option>
                                                  <option value={1634}>
                                                    Career Desss
                                                  </option>
                                                  <option value={1845}>
                                                    carpetscleaners.us
                                                  </option>
                                                  <option value={1686}>CBD
                                                    Oil</option>
                                                  <option value={1676}>
                                                    Chat Bot</option>
                                                  <option value={1726}>
                                                    CheezeeBurger-Rest
                                                  </option>
                                                  <option value={1512}>
                                                    Chiliad Staffing
                                                  </option>
                                                  <option value={1537}>
                                                    chlwlaws</option>
                                                  <option value={1542}>
                                                    Clinton Industries
                                                  </option>
                                                  <option value={1417}>
                                                    clintonindustries.com
                                                  </option>
                                                  <option value={1522}>
                                                    Cloud Implementation
                                                  </option>
                                                  <option value={1834}>
                                                    cmmonitor.desss-portfolio.com
                                                  </option>
                                                  <option value={1605}>CMS
                                                    component</option>
                                                  <option value={1753}>
                                                    conciergeceo.com
                                                  </option>
                                                  <option value={1685}>
                                                    Copyxoom</option>
                                                  <option value={1841}>
                                                    court.desss-portfolio.com
                                                  </option>
                                                  <option value={1581}>
                                                    cre8houston</option>
                                                  <option value={1833}>
                                                    cre8houston.desss-portfolio.com
                                                  </option>
                                                  <option value={1852}>
                                                    Data mining</option>
                                                  <option value={1565}>
                                                    demo</option>
                                                  <option value={1351}>
                                                    DESSS</option>
                                                  <option value={1523}>
                                                    DESSS Accounting
                                                  </option>
                                                  <option value={1501}>
                                                    DESSS Data Center
                                                  </option>
                                                  <option value={1364}>
                                                    DESSS E COMMERCE
                                                  </option>
                                                  <option value={1524}>
                                                    DESSS Proposals
                                                  </option>
                                                  <option value={1519}>
                                                    DESSS-Marketing
                                                  </option>
                                                  <option value={1587}>
                                                    destinyeventvenues
                                                  </option>
                                                  <option value={1807}>
                                                    devpetshop.desss
                                                  </option>
                                                  <option value={1809}>
                                                    devpetshop.desss-portfolio.com
                                                  </option>
                                                  <option value={1847}>
                                                    DLDC</option>
                                                  <option value={1866}>DM
                                                    Reports</option>
                                                  <option value={1700}>
                                                    dm-conciergeceo.com
                                                  </option>
                                                  <option value={1699}>
                                                    DM-Danmartinez.com
                                                  </option>
                                                  <option value={1695}>
                                                    DM-DESSS</option>
                                                  <option value={1702}>
                                                    DM-perthemilellc.com
                                                  </option>
                                                  <option value={1732}>
                                                    DM-TexanStorage2
                                                  </option>
                                                  <option value={1697}>
                                                    DM-Trophydeals.com
                                                  </option>
                                                  <option value={1701}>
                                                    DM-Turfteamusa.com
                                                  </option>
                                                  <option value={1696}>
                                                    DM-Txgidocs</option>
                                                  <option value={1698}>
                                                    DM-Webdesign-Houston
                                                  </option>
                                                  <option value={1862}>
                                                    DocSouth</option>
                                                  <option value={1525}>
                                                    Doctor's Appointment
                                                  </option>
                                                  <option value={1680}>
                                                    Doctors Portal
                                                  </option>
                                                  <option value={1630}>
                                                    DoorGas</option>
                                                  <option value={1748}>
                                                    dotnet Dynamic Forms
                                                  </option>
                                                  <option value={1711}>DR
                                                    Guru N reddy
                                                  </option>
                                                  <option value={1715}>
                                                    Dr-Appt-Notification
                                                  </option>
                                                  <option value={1757}>
                                                    drsbooking</option>
                                                  <option value={1731}>
                                                    DrugTest</option>
                                                  <option value={1823}>
                                                    Dynamic API</option>
                                                  <option value={1826}>
                                                    Dynamic Forms
                                                  </option>
                                                  <option value={1620}>
                                                    DynamicNav</option>
                                                  <option value={1513}>
                                                    DynamicWeb</option>
                                                  <option value={1526}>
                                                    E-Forms</option>
                                                  <option value={1593}>
                                                    ecommerce Component
                                                  </option>
                                                  <option value={1672}>EDI
                                                  </option>
                                                  <option value={1637}>
                                                    elearning</option>
                                                  <option value={1817}>
                                                    Ember</option>
                                                  <option value={1604}>
                                                    Epicor_SQLImport
                                                  </option>
                                                  <option value={1566}>
                                                    Excel Data
                                                    Manuplation</option>
                                                  <option value={1595}>
                                                    Excel2SQL</option>
                                                  <option value={1508}>
                                                    FBLA</option>
                                                  <option value={1794}>
                                                    final tet</option>
                                                  <option value={1430}>
                                                    Fusiondocx</option>
                                                  <option value={1683}>
                                                    Future Trucks
                                                  </option>
                                                  <option value={1599}>
                                                    Gamechat</option>
                                                  <option value={1770}>
                                                    GeaofTexas</option>
                                                  <option value={1635}>
                                                    GeaTexas</option>
                                                  <option value={1507}>
                                                    geoenvironment-technologies
                                                  </option>
                                                  <option value={1644}>
                                                    GeoFencing</option>
                                                  <option value={1444}>
                                                    GetcomputerJobs
                                                  </option>
                                                  <option value={1515}>
                                                    google cloud
                                                  </option>
                                                  <option value={1761}>
                                                    Google Keyword
                                                    Analysis</option>
                                                  <option value={1805}>
                                                    Google Keyword
                                                    Suggession</option>
                                                  <option value={1864}>
                                                    Google pin location
                                                  </option>
                                                  <option value={1755}>
                                                    Google SEO Keyword
                                                    Research</option>
                                                  <option value={1617}>
                                                    Gowtham testing
                                                  </option>
                                                  <option value={1792}>
                                                    gp-implementation
                                                  </option>
                                                  <option value={1431}>
                                                    Hardware Issues
                                                  </option>
                                                  <option value={1335}>
                                                    HelpDesk</option>
                                                  <option value={1781}>
                                                    helpdesk test
                                                  </option>
                                                  <option value={1734}>
                                                    helpdesk-Mobile
                                                  </option>
                                                  <option value={1636}>
                                                    Hill Industrial
                                                    Tools</option>
                                                  <option value={1347}>HR
                                                  </option>
                                                  <option value={1408}>
                                                    Hyperion Essbase
                                                  </option>
                                                  <option value={1704}>
                                                    Infra-1and1 Server
                                                    migration</option>
                                                  <option value={1707}>
                                                    Infra-AWS</option>
                                                  <option value={1706}>
                                                    Infra-Azure</option>
                                                  <option value={1709}>
                                                    infra-desss-India
                                                  </option>
                                                  <option value={1710}>
                                                    Infra-desssUS
                                                  </option>
                                                  <option value={1533}>
                                                    Infra-Github
                                                    Repository setup
                                                  </option>
                                                  <option value={1708}>
                                                    Infra-Google
                                                  </option>
                                                  <option value={1427}>
                                                    Infrastructure
                                                  </option>
                                                  <option value={1652}>
                                                    Institute</option>
                                                  <option value={1374}>
                                                    jjlltd.com</option>
                                                  <option value={1592}>
                                                    Jobman</option>
                                                  <option value={1461}>
                                                    jobportal</option>
                                                  <option value={1764}>
                                                    kamali Test</option>
                                                  <option value={1763}>
                                                    Kamali-Chandler-test
                                                  </option>
                                                  <option value={1486}>
                                                    katytamil</option>
                                                  <option value={1477}>
                                                    Kbase Joomla
                                                  </option>
                                                  <option value={1397}>
                                                    khtlp</option>
                                                  <option value={1460}>
                                                    KiosPhotos</option>
                                                  <option value={1643}>
                                                    kirschlandscape
                                                  </option>
                                                  <option value={1464}>
                                                    kochhead</option>
                                                  <option value={1478}>
                                                    kojocrop</option>
                                                  <option value={1677}>
                                                    KRESSS</option>
                                                  <option value={1569}>
                                                    landscaping</option>
                                                  <option value={1355}>
                                                    Lane Staffing
                                                  </option>
                                                  <option value={1396}>
                                                    LCEC</option>
                                                  <option value={1536}>
                                                    Learning curve
                                                  </option>
                                                  <option value={1815}>
                                                    localhost/magento2
                                                  </option>
                                                  <option value={1589}>
                                                    madrastimes</option>
                                                  <option value={1509}>
                                                    Magento theme
                                                    Integration</option>
                                                  <option value={1447}>
                                                    mailtides.com
                                                  </option>
                                                  <option value={1596}>
                                                    Maritime Software
                                                  </option>
                                                  <option value={1503}>
                                                    Medical Guide
                                                  </option>
                                                  <option value={1502}>
                                                    Medical Press
                                                  </option>
                                                  <option value={1505}>
                                                    Medican Health
                                                  </option>
                                                  <option value={1703}>
                                                    Metronational - MRI
                                                    Web Services
                                                  </option>
                                                  <option value={1350}>MFB
                                                  </option>
                                                  <option value={1816}>
                                                    Midwal Engineering
                                                  </option>
                                                  <option value={1511}>
                                                    Miscellaneous
                                                  </option>
                                                  <option value={1601}>
                                                    Mobile Application
                                                  </option>
                                                  <option value={1568}>
                                                    Mobile demo</option>
                                                  <option value={1452}>
                                                    Mobile Platform
                                                  </option>
                                                  <option value={1749}>MRI
                                                    Integration</option>
                                                  <option value={1556}>
                                                    Multisite</option>
                                                  <option value={1736}>
                                                    MylifeTL</option>
                                                  <option value={1762}>
                                                    MySQL Data Import
                                                  </option>
                                                  <option value={1345}>
                                                    Natco Machine &amp;
                                                    Welding</option>
                                                  <option value={1618}>
                                                    ncrowd</option>
                                                  <option value={1857}>
                                                    npboatrvstorage
                                                  </option>
                                                  <option value={1465}>OCR
                                                  </option>
                                                  <option value={1754}>
                                                    Oliver</option>
                                                  <option value={1798}>
                                                    openstorj</option>
                                                  <option value={1348}>
                                                    Other work</option>
                                                  <option value={1751}>P21
                                                    API Analysis
                                                  </option>
                                                  <option value={1733}>
                                                    Patients Waiting
                                                  </option>
                                                  <option value={1629}>
                                                    Patio1</option>
                                                  <option value={1804}>
                                                    Patriotmedbill
                                                  </option>
                                                  <option value={1861}>Pdf
                                                    to mirrorText
                                                  </option>
                                                  <option value={1860}>Pdf
                                                    to Text</option>
                                                  <option value={1693}>
                                                    Perthemile-Service
                                                  </option>
                                                  <option value={1810}>
                                                    petshopngo</option>
                                                  <option value={1422}>
                                                    PetStoreUSA</option>
                                                  <option value={1401}>PHP
                                                    Components
                                                    Development</option>
                                                  <option value={1843}>
                                                    pixiesintent.com
                                                  </option>
                                                  <option value={1846}>
                                                    Pleaform</option>
                                                  <option value={1849}>
                                                    postgreSQL</option>
                                                  <option value={1827}>
                                                    Power BI Learning
                                                  </option>
                                                  <option value={1842}>
                                                    pPxiesintent.com
                                                  </option>
                                                  <option value={1679}>
                                                    Product code
                                                    generation</option>
                                                  <option value={1694}>
                                                    Product-service-ecom-appointment
                                                  </option>
                                                  <option value={1425}>
                                                    Proposal Preparation
                                                  </option>
                                                  <option value={1405}>
                                                    Prototype</option>
                                                  <option value={1835}>
                                                    Psfruit</option>
                                                  <option value={1622}>
                                                    Qliksense</option>
                                                  <option value={1576}>
                                                    QuickBook ImportTool
                                                  </option>
                                                  <option value={1673}>
                                                    Ranking tool for seo
                                                  </option>
                                                  <option value={1712}>
                                                    Reach Dentist
                                                  </option>
                                                  <option value={1855}>
                                                    Reach Dentist App
                                                  </option>
                                                  <option value={1555}>
                                                    Reachattorney
                                                  </option>
                                                  <option value={1820}>
                                                    React-servicepro
                                                  </option>
                                                  <option value={1844}>
                                                    reactjs.desss-portfolio.com
                                                  </option>
                                                  <option value={1811}>
                                                    Repository Creation
                                                  </option>
                                                  <option value={1801}>
                                                    ReserverAtKaty
                                                  </option>
                                                  <option value={1406}>
                                                    Restaurant
                                                    -CheezeeBurger-tradition
                                                  </option>
                                                  <option value={1527}>
                                                    RETS</option>
                                                  <option value={1453}>
                                                    Router &amp;
                                                    Firewall</option>
                                                  <option value={1848}>RTA
                                                  </option>
                                                  <option value={1856}>
                                                    Rvboatstorage
                                                  </option>
                                                  <option value={1518}>
                                                    Sales</option>
                                                  <option value={1586}>
                                                    SalesForceImport
                                                  </option>
                                                  <option value={1813}>
                                                    Saltware</option>
                                                  <option value={1467}>
                                                    SANBOX server
                                                  </option>
                                                  <option value={1458}>SAP
                                                    ECC</option>
                                                  <option value={1553}>SAP
                                                    Fiori Learning Curve
                                                  </option>
                                                  <option value={1468}>SAP
                                                    Installation
                                                  </option>
                                                  <option value={1836}>
                                                    Scanner(Sooner)
                                                  </option>
                                                  <option value={1353}>SEO
                                                  </option>
                                                  <option value={1744}>SEO
                                                    Keyword Position
                                                  </option>
                                                  <option value={1859}>SEO
                                                    Offpage Automation
                                                  </option>
                                                  <option value={1475}>Seo
                                                    Tool</option>
                                                  <option value={1398}>
                                                    servicepro</option>
                                                  <option value={1737}>
                                                    servicepro - Mobile
                                                  </option>
                                                  <option value={1824}>
                                                    servicepro-reactjs
                                                  </option>
                                                  <option value={1450}>
                                                    Sharepoint</option>
                                                  <option value={1631}>
                                                    Shell Dynamic
                                                  </option>
                                                  <option value={1337}>
                                                    Silsolver</option>
                                                  <option value={1854}>
                                                    Site checker
                                                  </option>
                                                  <option value={1590}>
                                                    site Hosting
                                                  </option>
                                                  <option value={1583}>
                                                    Slappin Mix Tapes
                                                  </option>
                                                  <option value={1674}>
                                                    Smart Inventory
                                                  </option>
                                                  <option value={1432}>
                                                    Software Issues
                                                  </option>
                                                  <option value={1838}>
                                                    Sooner Trace
                                                  </option>
                                                  <option value={1582}>
                                                    Southcentral
                                                  </option>
                                                  <option value={1867}>
                                                    SpaceJobMan</option>
                                                  <option value={1853}>
                                                    speech to text app
                                                  </option>
                                                  <option value={1714}>
                                                    speedyscanner
                                                  </option>
                                                  <option value={1837}>
                                                    speedyscanner.desss-portfolio.com
                                                  </option>
                                                  <option value={1606}>
                                                    SSIS Package Call
                                                  </option>
                                                  <option value={1831}>
                                                    stocks.desss-portfolio.com
                                                  </option>
                                                  <option value={1803}>
                                                    stubboxoffice
                                                  </option>
                                                  <option value={1678}>
                                                    Studio</option>
                                                  <option value={1651}>
                                                    Subsea</option>
                                                  <option value={1506}>
                                                    Supreme Health
                                                  </option>
                                                  <option value={1628}>tek
                                                    supportsquad
                                                  </option>
                                                  <option value={1463}>
                                                    Telemarketing
                                                  </option>
                                                  <option value={1607}>
                                                    Telemarketing-Mobile
                                                  </option>
                                                  <option value={1871}>
                                                    Terv</option>
                                                  <option value={1874}>
                                                    terv pro</option>
                                                  <option value={1756}>
                                                    Test</option>
                                                  <option value={1783}>
                                                    test kamali</option>
                                                  <option value={1795}>
                                                    test keziah</option>
                                                  <option value={1779}>
                                                    test2</option>
                                                  <option value={1793}>tet
                                                    k</option>
                                                  <option value={1372}>
                                                    Texanstorage2.com
                                                  </option>
                                                  <option value={1802}>
                                                    Texantool.com
                                                  </option>
                                                  <option value={1840}>
                                                    texasknief.desss-portfolio.com
                                                  </option>
                                                  <option value={1839}>
                                                    Texasknife</option>
                                                  <option value={1627}>
                                                    texasmunicipallawyers
                                                  </option>
                                                  <option value={1681}>The
                                                    Single App</option>
                                                  <option value={1868}>The
                                                    Single App V.2
                                                  </option>
                                                  <option value={1517}>
                                                    thiswomanswork
                                                  </option>
                                                  <option value={1713}>
                                                    ThriceBox</option>
                                                  <option value={1863}>
                                                    ticket.backstagevip.com
                                                  </option>
                                                  <option value={1821}>
                                                    tmobilesites
                                                  </option>
                                                  <option value={1520}>
                                                    Tonerhere Marketing
                                                  </option>
                                                  <option value={1738}>
                                                    Training-Mobile
                                                  </option>
                                                  <option value={1825}>
                                                    TrakkerAppt</option>
                                                  <option value={1684}>
                                                    Transcanada</option>
                                                  <option value={1481}>
                                                    transtar AC supply
                                                  </option>
                                                  <option value={1828}>
                                                    Trophydeals</option>
                                                  <option value={1808}>
                                                    Txgidocs</option>
                                                  <option value={1690}>
                                                    txgidocs.mailtides
                                                  </option>
                                                  <option value={1797}>
                                                    txgidoscs</option>
                                                  <option value={1361}>U
                                                    GOT WORK</option>
                                                  <option value={1532}>
                                                    United ac supply
                                                  </option>
                                                  <option value={1446}>
                                                    Upwork</option>
                                                  <option value={1370}>
                                                    Vanco</option>
                                                  <option value={1619}>
                                                    Vert</option>
                                                  <option value={1638}>
                                                    videostream</option>
                                                  <option value={1822}>
                                                    Vigorous CRM
                                                  </option>
                                                  <option value={1352}>
                                                    Virtual CRM</option>
                                                  <option value={1735}>
                                                    VirtualCRM-Mobile
                                                  </option>
                                                  <option value={1806}>
                                                    Virtualcrm-V2
                                                  </option>
                                                  <option value={1621}>
                                                    VLSRS</option>
                                                  <option value={1459}>
                                                    VProA</option>
                                                  <option value={1717}>
                                                    Vquiz2U</option>
                                                  <option value={1504}>We
                                                    Care</option>
                                                  <option value={1448}>Web
                                                    Design Dallas
                                                  </option>
                                                  <option value={1632}>Web
                                                    Design Prototype
                                                  </option>
                                                  <option value={1428}>Web
                                                    designer Houston
                                                  </option>
                                                  <option value={1799}>Web
                                                    Scrapping</option>
                                                  <option value={1814}>web
                                                    servies</option>
                                                  <option value={1758}>
                                                    Web2 Migration
                                                  </option>
                                                  <option value={1363}>
                                                    WEBZudio</option>
                                                  <option value={1521}>
                                                    WebZudio Marketing
                                                  </option>
                                                  <option value={1875}>
                                                    Whatsapp Group chat
                                                    Extractor</option>
                                                  <option value={1462}>
                                                    WINDOWS</option>
                                                  <option value={1575}>
                                                    woundwear</option>
                                                  <option value={1531}>
                                                    XAMPP</option>
                                                  <option value={1850}>
                                                    yahoo stock</option>
                                                  <option value={1470}>
                                                    YellowPages</option>
                                                  <option value={1759}>
                                                    yutalllc</option>
                                                  <option value={1691}>
                                                    zcms tool</option>
                                                  <option value={1858}>
                                                    zcmsdemo3</option>
                                                  <option value={1338}>
                                                    Zigzan</option>
                                                  <option value={1675}>
                                                    Zigzan In react
                                                    native</option>
                                                  <option value={1649}>
                                                    Zigzan Realter
                                                  </option>
                                                  <option value={1725}>
                                                    Zigzan Realtor
                                                  </option>
                                                  <option value={1510}>
                                                    Zmart cart</option>
                                                  <option value={1832}>
                                                    Zmart Import
                                                  </option>
                                                  <option value={1869}>
                                                    zmartcar2.0</option>
                                                  <option value={1496}>
                                                    ZmartCMS Version 2
                                                  </option>
                                                  <option value={1812}>
                                                    zmartcrm Dynamic MVC
                                                  </option>
                                                </select>
                                              </td>
                                              <td>
                                                <span id="rfvProject" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                              </td>
                                            </tr>
                                            <tr id="moduleid">
                                              <td id="tkModuletd" className="auto-style2">Module :
                                              </td>
                                              <td id="tkModuletd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkModule" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkModule\',\'\')', 0)" id="ddlTkModule" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={3865}>
                                                  </option>
                                                  <option value={3880}>
                                                    Accounting - Back
                                                    End</option>
                                                  <option value={3864}>api
                                                    test</option>
                                                  <option value={3174}>
                                                    Auston Labor Report
                                                  </option>
                                                  <option value={3033}>
                                                    Auston-bugs-0217
                                                  </option>
                                                  <option value={3034}>
                                                    Auston-Enhancements-0217
                                                  </option>
                                                  <option value={2929}>
                                                    Awards consulting
                                                  </option>
                                                  <option value={3324}>AWS
                                                    and Google to
                                                    Integration</option>
                                                  <option value={4002}>
                                                    Back End</option>
                                                  <option value={3882}>
                                                    BarChart -
                                                    Accounting</option>
                                                  <option value={3445}>Bug
                                                    Fixing</option>
                                                  <option value={2839}>
                                                    bugs list 08302017
                                                  </option>
                                                  <option value={2768}>
                                                    Bugs V2</option>
                                                  <option value={3552}>
                                                    Checkout Page
                                                    Redesign</option>
                                                  <option value={3957}>
                                                    Customer Portal
                                                  </option>
                                                  <option value={2468}>
                                                    DAta Migration
                                                  </option>
                                                  <option value={3730}>
                                                    Database - SQL
                                                    Server</option>
                                                  <option value={2683}>
                                                    Database Migration
                                                  </option>
                                                  <option value={2689}>
                                                    Database Migration
                                                    Errors</option>
                                                  <option value={2135}>
                                                    Default</option>
                                                  <option value={3327}>
                                                    Dim1-dim2
                                                    calcualtions
                                                  </option>
                                                  <option value={3549}>
                                                    Dynamic Images
                                                  </option>
                                                  <option value={3954}>
                                                    Engraving - Back End
                                                  </option>
                                                  <option value={3901}>
                                                    Engraving - Front
                                                    End</option>
                                                  <option value={2295}>
                                                    Enhancement
                                                  </option>
                                                  <option value={2703}>
                                                    Errors and
                                                    Enhancements
                                                  </option>
                                                  <option value={3176}>
                                                    Facebook Pixels
                                                    Integration</option>
                                                  <option value={3175}>
                                                    FedEX Integration
                                                  </option>
                                                  <option value={3544}>
                                                    FedEX Integration
                                                    for shipping
                                                  </option>
                                                  <option value={3553}>
                                                    Fedex Shipping
                                                    Integration</option>
                                                  <option value={2136}>
                                                    Filter Concept
                                                  </option>
                                                  <option value={3824}>
                                                    Filter option -
                                                    front end</option>
                                                  <option value={3550}>
                                                    Filters</option>
                                                  <option value={3173}>
                                                    filtration</option>
                                                  <option value={3776}>
                                                    Financial
                                                    Bugs-Backend
                                                  </option>
                                                  <option value={3924}>
                                                    Front End</option>
                                                  <option value={3926}>
                                                    Front End -
                                                    Performance</option>
                                                  <option value={3812}>
                                                    FrontEnd - Checkout
                                                    page</option>
                                                  <option value={3817}>
                                                    Header - FrontEnd
                                                  </option>
                                                  <option value={3328}>
                                                    Labor Report
                                                  </option>
                                                  <option value={3818}>
                                                    login - Backend
                                                  </option>
                                                  <option value={2838}>
                                                    Meeting</option>
                                                  <option value={3366}>
                                                    Meetings and
                                                    Discussion</option>
                                                  <option value={3913}>
                                                    Mobile view</option>
                                                  <option value={3820}>
                                                    Mylar- FrontEnd
                                                  </option>
                                                  <option value={3171}>N/A
                                                  </option>
                                                  <option value={3525}>
                                                    openitems-11262020
                                                  </option>
                                                  <option value={3710}>
                                                    Order-Backend
                                                  </option>
                                                  <option value={3958}>
                                                    Performance</option>
                                                  <option value={3956}>
                                                    performance - front
                                                    end</option>
                                                  <option value={3172}>
                                                    Product code
                                                    generation</option>
                                                  <option value={3884}>
                                                    Product Screen -
                                                    Front End</option>
                                                  <option value={3900}>
                                                    PromoCode Formula
                                                  </option>
                                                  <option value={2542}>
                                                    publish server
                                                  </option>
                                                  <option value={3729}>
                                                    Purchase order
                                                    Backend</option>
                                                  <option value={2152}>
                                                    QuickBook</option>
                                                  <option value={2823}>
                                                    QuickBooks</option>
                                                  <option value={4131}>
                                                    Quote Pdf</option>
                                                  <option value={3925}>
                                                    quote PDF - Back End
                                                  </option>
                                                  <option value={4132}>
                                                    Quote pdf
                                                    Generation- FrontEnd
                                                  </option>
                                                  <option value={3923}>
                                                    Rebuild Index
                                                  </option>
                                                  <option value={3899}>
                                                    Rebuild Index
                                                  </option>
                                                  <option value={3811}>
                                                    Relieve Inventory -
                                                    BackEnd</option>
                                                  <option value={3551}>
                                                    Reports</option>
                                                  <option value={3362}>
                                                    Requirements
                                                    Gathering</option>
                                                  <option value={3828}>
                                                    Responsive Design
                                                  </option>
                                                  <option value={3813}>
                                                    Review Popup -
                                                    FrontEnd</option>
                                                  <option value={3823}>
                                                    search option -
                                                    FrontEnd</option>
                                                  <option value={3019}>SEO
                                                  </option>
                                                  <option value={3746}>
                                                    server
                                                    infrastructure
                                                  </option>
                                                  <option value={3953}>
                                                    shipping cost
                                                    calculation</option>
                                                  <option value={3898}>
                                                    Shipping Details
                                                  </option>
                                                  <option value={3816}>
                                                    Shipping label
                                                  </option>
                                                  <option value={3540}>
                                                    simple search with
                                                    Auto Increm</option>
                                                  <option value={3819}>
                                                    Template - FrontEnd
                                                  </option>
                                                  <option value={2188}>
                                                    Testing And Analzing
                                                  </option>
                                                  <option value={3912}>
                                                    trophiestoday -
                                                    front end</option>
                                                  <option value={3930}>
                                                    Trophiestoday -
                                                    Front End</option>
                                                  <option value={3014}>UPS
                                                    Integration</option>
                                                  <option value={2241}>URL
                                                    Rewrite </option>
                                                  <option value={3775}>USA
                                                    - Backend Bug
                                                  </option>
                                                  <option value={3955}>
                                                    USawardsupply -
                                                    Front End &amp; ba
                                                  </option>
                                                  <option value={3906}>
                                                    Validation - Front
                                                    End</option>
                                                  <option value={3858}>web
                                                    service - API
                                                  </option>
                                                </select>
                                              </td>
                                              <td>
                                                <span id="RequiredFieldValidator1" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                              </td>
                                            </tr>
                                            <tr id="Tasktypeid">
                                              <td id="tkTaskTypetd" className="auto-style2">Task
                                                Type :</td>
                                              <td id="tkTaskTypetd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkTaskType" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkTaskType\',\'\')', 0)" id="ddlTkTaskType" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={2}>Bug
                                                  </option>
                                                  <option value={27}>
                                                    Content Writing
                                                  </option>
                                                  <option selected="selected" value={3}>
                                                    Enchancement
                                                  </option>
                                                  <option value={25}>
                                                    Knowledge Transfer
                                                  </option>
                                                  <option value={22}>
                                                    Maintenance Server
                                                    ubuntu AWS</option>
                                                  <option value={29}>
                                                    Python</option>
                                                  <option value={28}>SEO
                                                  </option>
                                                  <option value={14}>Team
                                                    Meeting</option>
                                                  <option value={5}>
                                                    Testing</option>
                                                  <option value={15}>
                                                    Training</option>
                                                  <option value={26}>
                                                    Website changes
                                                  </option>
                                                </select>
                                              </td>
                                              <td>
                                                <span id="RequiredFieldValidator4" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                              </td>
                                            </tr>
                                            <tr id="clntmanager">
                                              <td id="tkclientmanagertd" className="auto-style2">Client
                                                Manager :</td>
                                              <td id="tkclientmanagertd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkclientmanager" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkclientmanager\',\'\')', 0)" id="ddlTkclientmanager" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={10}>DESSS
                                                    Admin</option>
                                                  <option value={101}>
                                                    Sathya Dev</option>
                                                  <option value={152}>
                                                    vijaya s</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="csrep">
                                              <td id="tkcustomerservicetd" className="auto-style2">Customer
                                                Service Rep :</td>
                                              <td id="tkcustomerservicetd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkcustomerservice" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkcustomerservice\',\'\')', 0)" id="ddlTkcustomerservice" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={170}>
                                                    Arunchandru K
                                                  </option>
                                                  <option value={11}>
                                                    Chandler Dev
                                                  </option>
                                                  <option value={10}>DESSS
                                                    Admin</option>
                                                  <option value={169}>
                                                    Mohan Kumar T N
                                                  </option>
                                                  <option value={177}>
                                                    Nithish Kumar K
                                                  </option>
                                                  <option value={120}>
                                                    Prashanth V</option>
                                                  <option value={129}>
                                                    Pravinkanth P
                                                  </option>
                                                  <option value={168}>Prem
                                                    Kumar E</option>
                                                  <option value={184}>
                                                    Rabiyulfahim H
                                                  </option>
                                                  <option value={116}>
                                                    Sangeetha priya S
                                                  </option>
                                                  <option value={101}>
                                                    Sathya Dev</option>
                                                  <option value={114}>
                                                    Shakila p</option>
                                                  <option value={164}>
                                                    Sheshu Chandrasekar
                                                  </option>
                                                  <option value={160}>
                                                    Sinthiya P.S
                                                  </option>
                                                  <option value={111}>
                                                    subramani k</option>
                                                  <option value={134}>
                                                    sudarsan j</option>
                                                  <option value={172}>
                                                    Testing Manager
                                                  </option>
                                                  <option value={146}>
                                                    Vijaya S</option>
                                                  <option value={152}>
                                                    vijaya s</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="TTLead">
                                              <td id="tkTechnicalTeamtd" className="auto-style2">
                                                Technical Team Lead :</td>
                                              <td id="tkTechnicalTeamtd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkTechnicalTeam" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkTechnicalTeam\',\'\')', 0)" id="ddlTkTechnicalTeam" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={181}>Arul
                                                    Raj</option>
                                                  <option value={170}>
                                                    Arunchandru K
                                                  </option>
                                                  <option value={186}>
                                                    BalaKrishnan G
                                                  </option>
                                                  <option value={157}>
                                                    Bindu S</option>
                                                  <option value={11}>
                                                    Chandler Dev
                                                  </option>
                                                  <option value={10}>DESSS
                                                    Admin</option>
                                                  <option value={77}>
                                                    gowtham
                                                    Suthanthiraraj
                                                  </option>
                                                  <option value={136}>
                                                    kamali k</option>
                                                  <option value={167}>
                                                    Little kumar
                                                  </option>
                                                  <option value={182}>
                                                    Manokar G</option>
                                                  <option value={169}>
                                                    Mohan Kumar T N
                                                  </option>
                                                  <option value={31}>Muthu
                                                    Priya</option>
                                                  <option value={155}>
                                                    Nagaraj D</option>
                                                  <option value={177}>
                                                    Nithish Kumar K
                                                  </option>
                                                  <option value={183}>
                                                    Prabhu P</option>
                                                  <option value={120}>
                                                    Prashanth V</option>
                                                  <option value={168}>Prem
                                                    Kumar E</option>
                                                  <option value={184}>
                                                    Rabiyulfahim H
                                                  </option>
                                                  <option value={15}>Rajan
                                                    S</option>
                                                  <option value={179}>
                                                    Rengarajan P
                                                  </option>
                                                  <option value={116}>
                                                    Sangeetha priya S
                                                  </option>
                                                  <option value={101}>
                                                    Sathya Dev</option>
                                                  <option value={114}>
                                                    Shakila p</option>
                                                  <option value={171}>
                                                    Sharan Karthick S
                                                  </option>
                                                  <option value={164}>
                                                    Sheshu Chandrasekar
                                                  </option>
                                                  <option value={111}>
                                                    subramani k</option>
                                                  <option value={134}>
                                                    sudarsan j</option>
                                                  <option value={135}>
                                                    Suria Prakash
                                                  </option>
                                                  <option value={172}>
                                                    Testing Manager
                                                  </option>
                                                  <option value={173}>
                                                    Testing User
                                                  </option>
                                                  <option value={151}>
                                                    Yuvaraj P</option>
                                                  <option value={174}>
                                                    zaheer M</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="TDperson">
                                              <td id="tkdevelopertd" className="auto-style2">
                                                Technical / Developer Person
                                                :</td>
                                              <td id="tkdevelopertd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkdeveloper" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkdeveloper\',\'\')', 0)" id="ddlTkdeveloper" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option value="---Select---">
                                                    ---Select---
                                                  </option>
                                                  <option value={181}>Arul
                                                    Raj</option>
                                                  <option value={170}>
                                                    Arunchandru K
                                                  </option>
                                                  <option value={186}>
                                                    BalaKrishnan G
                                                  </option>
                                                  <option value={157}>
                                                    Bindu S</option>
                                                  <option value={11}>
                                                    Chandler Dev
                                                  </option>
                                                  <option value={10}>DESSS
                                                    Admin</option>
                                                  <option value={77}>
                                                    gowtham
                                                    Suthanthiraraj
                                                  </option>
                                                  <option value={136}>
                                                    kamali k</option>
                                                  <option value={167}>
                                                    Little kumar
                                                  </option>
                                                  <option value={182}>
                                                    Manokar G</option>
                                                  <option value={169}>
                                                    Mohan Kumar T N
                                                  </option>
                                                  <option value={31}>Muthu
                                                    Priya</option>
                                                  <option value={155}>
                                                    Nagaraj D</option>
                                                  <option value={177}>
                                                    Nithish Kumar K
                                                  </option>
                                                  <option value={183}>
                                                    Prabhu P</option>
                                                  <option value={120}>
                                                    Prashanth V</option>
                                                  <option value={168}>Prem
                                                    Kumar E</option>
                                                  <option value={184}>
                                                    Rabiyulfahim H
                                                  </option>
                                                  <option value={15}>Rajan
                                                    S</option>
                                                  <option value={179}>
                                                    Rengarajan P
                                                  </option>
                                                  <option value={116}>
                                                    Sangeetha priya S
                                                  </option>
                                                  <option value={101}>
                                                    Sathya Dev</option>
                                                  <option value={114}>
                                                    Shakila p</option>
                                                  <option value={171}>
                                                    Sharan Karthick S
                                                  </option>
                                                  <option value={164}>
                                                    Sheshu Chandrasekar
                                                  </option>
                                                  <option value={111}>
                                                    subramani k</option>
                                                  <option value={134}>
                                                    sudarsan j</option>
                                                  <option value={135}>
                                                    Suria Prakash
                                                  </option>
                                                  <option value={172}>
                                                    Testing Manager
                                                  </option>
                                                  <option value={173}>
                                                    Testing User
                                                  </option>
                                                  <option value={151}>
                                                    Yuvaraj P</option>
                                                  <option value={174}>
                                                    zaheer M</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="Tickettype">
                                              <td id="tkTicketTypetd" className="auto-style2">Ticket
                                                Type :</td>
                                              <td id="tkTicketTypetd1" className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTkTicketType" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ddlTkTicketType\',\'\')', 0)" id="ddlTkTicketType" style={{fontFamily: 'Calibri', fontSize: '14px', width: '300px'}}>
                                                  <option selected="selected" value={0}>
                                                    ---Select---
                                                  </option>
                                                  <option value={1}>
                                                    Support</option>
                                                  <option value={2}>
                                                    Maintenance</option>
                                                  <option value={3}>Bug
                                                  </option>
                                                  <option value={4}>
                                                    Enhancement</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="emailto">
                                              <td id="emailtd" className="auto-style2">Email To
                                                :
                                              </td>
                                              <td id="emailtd1" className="auto-style1">
                                                <table className="dxeTextBoxSys dxeTextBox dxeDisabled" cellSpacing={0} cellPadding={0} id="txtEmailTo" border={0} style={{borderCollapse: 'collapse'}}>
                                                  <tbody>
                                                    <tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: '2px', paddingRight: '2px', paddingTop: '2px', paddingBottom: '2px'}}>
                                                        <input tabIndex={-1} className="dxeEditArea dxeDisabled dxeEditAreaSys" id="txtEmailTo_I" name="ctl00$MainContent$txtEmailTo" disabled="disabled" defaultValue="kamali@desss.com,dev@desss.com,yogesh@desss.com" type="text" style={{height: '15px'}} />
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr id="ticketstatus">
                                              <td className="auto-style2">Ticket
                                                Status :
                                              </td>
                                              <td className="auto-style1">
                                                <select name="ctl00$MainContent$ddlticketstatus" id="ddlticketstatus" style={{fontFamily: 'Calibri', fontSize: '14px'}}>
                                                  <option selected="selected" value={1}>Open
                                                  </option>
                                                  <option value={2}>
                                                    Progressing</option>
                                                  <option value={3}>Closed
                                                  </option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="TicketSeverity">
                                              <td className="auto-style2">
                                                Ticket Severity:
                                              </td>
                                              <td className="auto-style1">
                                                <select name="ctl00$MainContent$ddlTicketSeverity" id="ddlTicketSeverity" style={{fontFamily: 'Calibri', fontSize: '14px'}}>
                                                  <option selected="selected" value={1}>Critical
                                                  </option>
                                                  <option value={2}>High
                                                  </option>
                                                  <option value={3}>Medium
                                                  </option>
                                                  <option value={4}>Low
                                                  </option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="esccount">
                                              <td className="auto-style2">
                                                Escalate Count :
                                              </td>
                                              <td className="auto-style1">
                                                <input name="ctl00$MainContent$txt_esccount" type="text" defaultValue={0} id="txt_esccount" style={{fontFamily: 'Calibri', fontSize: '14px'}} />
                                              </td>
                                            </tr>
                                            <tr id="attachmentid">
                                              <td className="auto-style2">
                                                Attachment :</td>
                                              <td className="auto-style1" style={{display: 'flex', alignItems: 'center'}}>
                                                <input type="file" name="ctl00$MainContent$flTicket" id="flTicket" />
                                                <a href="#" id="hplAttach" style={{textDecoration: 'none'}}>
                                                  <span id="lbtnView" /></a>
                                                <a id="hl_file" href="../Tickets%20Files.aspx?Tckid=5253&&FileType=Attachment" target="_blank">Attachment</a>
                                              </td>
                                            </tr>
                                            <tr id="ticketRow">
                                              <td className="auto-style2">Screen
                                                Shot :</td>
                                              <td className="auto-style1" style={{display: 'flex', alignItems: 'center'}}>
                                                <input type="file" name="ctl00$MainContent$flScreenShot" id="flScreenShot" />
                                                <a href="#" id="hplScreen" style={{textDecoration: 'none'}}>
                                                  <span id="Label1" /></a>
                                                <a id="Hl_scheernshot" href="../Tickets%20Files.aspx?Tckid=5253&&FileType=ScreenShot" target="_blank">ScreenShot</a>
                                              </td>
                                            </tr>
                                            <tr id="notes">
                                              <td className="auto-style2">Notes :
                                              </td>
                                              <td className="auto-style1">
                                                <textarea name="ctl00$MainContent$txtNotes" rows={2} cols={20} id="txtNotes" style={{fontFamily: 'Calibri', fontSize: '14px', width: '400px'}} defaultValue={""} />
                                              </td>
                                            </tr>
                                            <tr id="sourceid">
                                              <td className="auto-style2">
                                                Source :
                                              </td>
                                              <td className="auto-style1">
                                                <select name="ctl00$MainContent$ddl_souce" id="ddl_souce" style={{fontFamily: 'Calibri', fontSize: '14px'}}>
                                                  <option value="Email">
                                                    Email</option>
                                                  <option selected="selected" value="Ticket">
                                                    Ticket</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr id="billableid">
                                              <td className="auto-style3">
                                                Is Billable
                                                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="chk_isbill" type="checkbox" name="ctl00$MainContent$chk_isbill" /></span>
                                              </td>
                                              <td className="auto-style4">
                                                Is Billed
                                                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="chk_isBilled" type="checkbox" name="ctl00$MainContent$chk_isBilled" /></span>
                                              </td>
                                            </tr>
                                            <tr id="estcompletedate">
                                              <td className="auto-style2">
                                                Estimated Completed Date:
                                              </td>
                                              <td className="auto-style1">
                                                <input type="hidden" id="Date_estimate_Raw" name="Date_estimate_Raw" defaultValue="1686547682286.99" />
                                                <table className="dxeButtonEdit" cellSpacing={1} cellPadding={0} id="Date_estimate" border={0}>
                                                  <tbody>
                                                    <tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('Date_estimate', event)" style={{width: '100%', paddingLeft: '1px', paddingRight: '1px', paddingTop: '1px', paddingBottom: '1px'}}>
                                                        <input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$Date_estimate" onkeyup="aspxEKeyUp('Date_estimate', event)" defaultValue="6/12/2023" id="Date_estimate_I" onchange="aspxETextChanged('Date_estimate')" onblur="aspxELostFocus('Date_estimate')" onfocus="aspxEGotFocus('Date_estimate')" type="text" onkeydown="aspxEKeyDown('Date_estimate', event)" style={{height: '15px'}} autoComplete="off" />
                                                      </td>
                                                      <td id="Date_estimate_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('Date_estimate', event)" style={{KhtmlUserSelect: 'none'}}>
                                                        <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody>
                                                            <tr>
                                                              <td className="dx">
                                                                <img id="Date_estimate_B-1Img" className="dxEditors_edtDropDown" src={DXR1} alt="v" />
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table><input type="hidden" id="Date_estimate_DDDWS" name="Date_estimate_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" />
                                                <div id="Date_estimate_DDD_PW-1" style={{position: 'absolute', left: '0px', top: '0px', zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Date_estimate_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody>
                                                      <tr>
                                                        <td onmousedown="aspxPWMDown(event,'Date_estimate_DDD',-1,false)" style={{width: '200px', cursor: 'default'}}>
                                                          <table id="Date_estimate_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: '200px', borderCollapse: 'separate'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td id="Date_estimate_DDD_PWC-1" style={{height: '100%'}}>
                                                                  <div id="Date_estimate_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody>
                                                                        <tr>
                                                                          <td id="Date_estimate_DDD_C_EC_D" className="dxeCalendarDay">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_DS" className="dxeCalendarSelected">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_DA" className="dxeCalendarOtherMonth">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_DW" className="dxeCalendarWeekend">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_DO" className="dxeCalendarOutOfRange">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_DT" className="dxeCalendarToday">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_DD" className="dxeDisabled">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_FNY" className="dxeCalendarFastNavYear">
                                                                          </td>
                                                                          <td id="Date_estimate_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected">
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <table className="dxeCalendar" cellSpacing={0} cellPadding={0} id="Date_estimate_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody>
                                                                        <tr>
                                                                          <td valign="top">
                                                                            <table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody>
                                                                                <tr>
                                                                                  <td className="dxeCalendarHeader" style={{borderTop: 0}}>
                                                                                    <table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td id="Date_estimate_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('Date_estimate_DDD_C', -12);">
                                                                                            <img id="Date_estimate_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear" src={DXR1} alt="<<" />
                                                                                          </td>
                                                                                          <td>
                                                                                            <div style={{width: '10px', fontSize: '0px'}}>
                                                                                            </div>
                                                                                          </td>
                                                                                          <td id="Date_estimate_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('Date_estimate_DDD_C', -1);">
                                                                                            <img id="Date_estimate_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth" src={DXR1} alt="<" />
                                                                                          </td>
                                                                                          <td id="Date_estimate_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}>
                                                                                            <span id="Date_estimate_DDD_C_T" onclick="aspxCalTitleClick('Date_estimate_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>June
                                                                                              2023</span>
                                                                                          </td>
                                                                                          <td id="Date_estimate_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('Date_estimate_DDD_C', 1);">
                                                                                            <img id="Date_estimate_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth" src={DXR1} alt=">" />
                                                                                          </td>
                                                                                          <td>
                                                                                            <div style={{width: '10px', fontSize: '0px'}}>
                                                                                            </div>
                                                                                          </td>
                                                                                          <td id="Date_estimate_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('Date_estimate_DDD_C', 12);">
                                                                                            <img id="Date_estimate_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear" src={DXR1} alt=">>" />
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                </tr>
                                                                                <tr>
                                                                                  <td id="Date_estimate_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}>
                                                                                    <table id="Date_estimate_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody>
                                                                                        <tr align="center">
                                                                                          <td id="Date_estimate_DDD_C_AUX_0_0_0">
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_estimate_DDD_C_AUX_0_0_1">
                                                                                            Sun
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_estimate_DDD_C_AUX_0_0_2">
                                                                                            Mon
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_estimate_DDD_C_AUX_0_0_3">
                                                                                            Tue
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_estimate_DDD_C_AUX_0_0_4">
                                                                                            Wed
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_estimate_DDD_C_AUX_0_0_5">
                                                                                            Thu
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_estimate_DDD_C_AUX_0_0_6">
                                                                                            Fri
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_estimate_DDD_C_AUX_0_0_7">
                                                                                            Sat
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_estimate_DDD_C_AUX_0_0_8">
                                                                                            22
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            28
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            29
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            30
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            31
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            1
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            2
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            3
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_estimate_DDD_C_AUX_0_0_9">
                                                                                            23
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            4
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            5
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            6
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            7
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            8
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            9
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            10
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_estimate_DDD_C_AUX_0_0_10">
                                                                                            24
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            11
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarToday dxeCalendarSelected" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            12
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            13
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            14
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            15
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            16
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            17
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_estimate_DDD_C_AUX_0_0_11">
                                                                                            25
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            18
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            19
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            20
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            21
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            22
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            23
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            24
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_estimate_DDD_C_AUX_0_0_12">
                                                                                            26
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            25
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            26
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            27
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            28
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            29
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            30
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            1
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_estimate_DDD_C_AUX_0_0_13">
                                                                                            27
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            2
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            3
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            4
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            5
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            6
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            7
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            8
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                </tr>
                                                                              </tbody>
                                                                            </table>
                                                                          </td>
                                                                        </tr>
                                                                        <tr>
                                                                          <td className="dxeCalendarFooter">
                                                                            <table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody>
                                                                                <tr>
                                                                                  <td>
                                                                                    <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td id="Date_estimate_DDD_C_BT" className="dxeCalendarButton" onclick="aspxCalTodayClick('Date_estimate_DDD_C');" style={{width: '37px'}}>
                                                                                            <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>
                                                                                                    Today
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                  <td>
                                                                                    <div style={{width: '12px', fontSize: '0px'}}>
                                                                                    </div>
                                                                                  </td>
                                                                                  <td>
                                                                                    <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td id="Date_estimate_DDD_C_BC" className="dxeCalendarButton" onclick="aspxCalClearClick('Date_estimate_DDD_C');" style={{width: '37px'}}>
                                                                                            <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>
                                                                                                    Clear
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                </tr>
                                                                              </tbody>
                                                                            </table>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <input type="hidden" id="Date_estimate_DDD_C_FNPWS" name="Date_estimate_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" />
                                                                    <div id="Date_estimate_DDD_C_FNP_PW-1" style={{position: 'absolute', left: '0px', top: '0px', zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="Date_estimate_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody>
                                                                          <tr>
                                                                            <td onmousedown="aspxPWMDown(event,'Date_estimate_DDD_C_FNP',-1,false)" style={{width: '0px', cursor: 'default'}}>
                                                                              <table id="Date_estimate_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: '0px', borderCollapse: 'separate'}}>
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td id="Date_estimate_DDD_C_FNP_PWC-1" style={{height: '100%'}}>
                                                                                      <div id="Date_estimate_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav">
                                                                                          <div className="dxeCalendarFastNavMonthArea">
                                                                                            <table id="Date_estimate_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M0">
                                                                                                    Jan
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M1">
                                                                                                    Feb
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M2">
                                                                                                    Mar
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M3">
                                                                                                    Apr
                                                                                                  </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M4">
                                                                                                    May
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M5">
                                                                                                    Jun
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M6">
                                                                                                    Jul
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M7">
                                                                                                    Aug
                                                                                                  </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M8">
                                                                                                    Sep
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M9">
                                                                                                    Oct
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M10">
                                                                                                    Nov
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_estimate_DDD_C_FNP_M11">
                                                                                                    Dec
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </div>
                                                                                          <div className="dxeCalendarFastNavYearArea">
                                                                                            <table id="Date_estimate_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: '8px'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('Date_estimate_DDD_C', -10)" rowSpan={2} style={{paddingRight: '8px', cursor: 'pointer'}}>
                                                                                                    <img className="dxEditors_edtCalendarFNPrevYear" src={DXR1} alt="<" />
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y0">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y1">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y2">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y3">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y4">
                                                                                                  </td>
                                                                                                  <td onclick="aspxCalFNYShuffle('Date_estimate_DDD_C', 10)" rowSpan={2} style={{paddingLeft: '8px', cursor: 'pointer'}}>
                                                                                                    <img className="dxEditors_edtCalendarFNNextYear" src={DXR1} alt=">" />
                                                                                                  </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y5">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y6">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y7">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y8">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_estimate_DDD_C_FNP_Y9">
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div className="dxeCalendarFastNavFooter" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="Date_estimate_DDD_C_FNP_BO" className="dxeCalendarButton" onclick="aspxCalFNBClick('Date_estimate_DDD_C', 'ok')" style={{width: '37px'}}>
                                                                                                  <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                                    <tbody>
                                                                                                      <tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>
                                                                                                          OK
                                                                                                        </td>
                                                                                                      </tr>
                                                                                                    </tbody>
                                                                                                  </table>
                                                                                                </td>
                                                                                                <td>
                                                                                                  <div style={{width: '11px'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td id="Date_estimate_DDD_C_FNP_BC" className="dxeCalendarButton" onclick="aspxCalFNBClick('Date_estimate_DDD_C', 'cancel')" style={{width: '37px'}}>
                                                                                                  <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                                    <tbody>
                                                                                                      <tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>
                                                                                                          Cancel
                                                                                                        </td>
                                                                                                      </tr>
                                                                                                    </tbody>
                                                                                                  </table>
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </div>
                                                                                      </div>
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </td>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}}>
                                                                            </td>
                                                                          </tr>
                                                                          <tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}}>
                                                                            </td>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}>
                                                                              <div style={{height: '5px', width: '5px'}}>
                                                                              </div>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </div>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}}>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}}>
                                                        </td>
                                                        <td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}>
                                                          <div style={{height: '5px', width: '5px'}}>
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div></td>
                                            </tr>
                                            <tr id="actcompletedate">
                                              <td className="auto-style2">
                                                Actual Complete Date :
                                              </td>
                                              <td className="auto-style1">
                                                <input type="hidden" id="Date_Actualdate_Raw" name="Date_Actualdate_Raw" defaultValue="N" />
                                                <table className="dxeButtonEdit" cellSpacing={1} cellPadding={0} id="Date_Actualdate" border={0}>
                                                  <tbody>
                                                    <tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('Date_Actualdate', event)" style={{width: '100%', paddingLeft: '1px', paddingRight: '1px', paddingTop: '1px', paddingBottom: '1px'}}>
                                                        <input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$Date_Actualdate" onkeyup="aspxEKeyUp('Date_Actualdate', event)" id="Date_Actualdate_I" onchange="aspxETextChanged('Date_Actualdate')" onblur="aspxELostFocus('Date_Actualdate')" onfocus="aspxEGotFocus('Date_Actualdate')" type="text" onkeydown="aspxEKeyDown('Date_Actualdate', event)" style={{height: '15px'}} autoComplete="off" />
                                                      </td>
                                                      <td id="Date_Actualdate_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('Date_Actualdate', event)" style={{KhtmlUserSelect: 'none'}}>
                                                        <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody>
                                                            <tr>
                                                              <td className="dx">
                                                                <img id="Date_Actualdate_B-1Img" className="dxEditors_edtDropDown" src={DXR1} alt="v" />
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table><input type="hidden" id="Date_Actualdate_DDDWS" name="Date_Actualdate_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" />
                                                <div id="Date_Actualdate_DDD_PW-1" style={{position: 'absolute', left: '0px', top: '0px', zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Date_Actualdate_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody>
                                                      <tr>
                                                        <td onmousedown="aspxPWMDown(event,'Date_Actualdate_DDD',-1,false)" style={{width: '200px', cursor: 'default'}}>
                                                          <table id="Date_Actualdate_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: '200px', borderCollapse: 'separate'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td id="Date_Actualdate_DDD_PWC-1" style={{height: '100%'}}>
                                                                  <div id="Date_Actualdate_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody>
                                                                        <tr>
                                                                          <td id="Date_Actualdate_DDD_C_EC_D" className="dxeCalendarDay">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_DS" className="dxeCalendarSelected">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_DA" className="dxeCalendarOtherMonth">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_DW" className="dxeCalendarWeekend">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_DO" className="dxeCalendarOutOfRange">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_DT" className="dxeCalendarToday">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_DD" className="dxeDisabled">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_FNY" className="dxeCalendarFastNavYear">
                                                                          </td>
                                                                          <td id="Date_Actualdate_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected">
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <table className="dxeCalendar" cellSpacing={0} cellPadding={0} id="Date_Actualdate_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody>
                                                                        <tr>
                                                                          <td valign="top">
                                                                            <table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody>
                                                                                <tr>
                                                                                  <td className="dxeCalendarHeader" style={{borderTop: 0}}>
                                                                                    <table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td id="Date_Actualdate_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('Date_Actualdate_DDD_C', -12);">
                                                                                            <img id="Date_Actualdate_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear" src={DXR1} alt="<<" />
                                                                                          </td>
                                                                                          <td>
                                                                                            <div style={{width: '10px', fontSize: '0px'}}>
                                                                                            </div>
                                                                                          </td>
                                                                                          <td id="Date_Actualdate_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('Date_Actualdate_DDD_C', -1);">
                                                                                            <img id="Date_Actualdate_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth" src={DXR1} alt="<" />
                                                                                          </td>
                                                                                          <td id="Date_Actualdate_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}>
                                                                                            <span id="Date_Actualdate_DDD_C_T" onclick="aspxCalTitleClick('Date_Actualdate_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>June
                                                                                              2023</span>
                                                                                          </td>
                                                                                          <td id="Date_Actualdate_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('Date_Actualdate_DDD_C', 1);">
                                                                                            <img id="Date_Actualdate_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth" src={DXR1} alt=">" />
                                                                                          </td>
                                                                                          <td>
                                                                                            <div style={{width: '10px', fontSize: '0px'}}>
                                                                                            </div>
                                                                                          </td>
                                                                                          <td id="Date_Actualdate_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('Date_Actualdate_DDD_C', 12);">
                                                                                            <img id="Date_Actualdate_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear" src={DXR1} alt=">>" />
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                </tr>
                                                                                <tr>
                                                                                  <td id="Date_Actualdate_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}>
                                                                                    <table id="Date_Actualdate_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody>
                                                                                        <tr align="center">
                                                                                          <td id="Date_Actualdate_DDD_C_AUX_0_0_0">
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_Actualdate_DDD_C_AUX_0_0_1">
                                                                                            Sun
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_Actualdate_DDD_C_AUX_0_0_2">
                                                                                            Mon
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_Actualdate_DDD_C_AUX_0_0_3">
                                                                                            Tue
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_Actualdate_DDD_C_AUX_0_0_4">
                                                                                            Wed
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_Actualdate_DDD_C_AUX_0_0_5">
                                                                                            Thu
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_Actualdate_DDD_C_AUX_0_0_6">
                                                                                            Fri
                                                                                          </td>
                                                                                          <td className="dxeCalendarDayHeader" id="Date_Actualdate_DDD_C_AUX_0_0_7">
                                                                                            Sat
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_Actualdate_DDD_C_AUX_0_0_8">
                                                                                            22
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            28
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            29
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            30
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            31
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            1
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            2
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            3
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_Actualdate_DDD_C_AUX_0_0_9">
                                                                                            23
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            4
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            5
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            6
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            7
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            8
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            9
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            10
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_Actualdate_DDD_C_AUX_0_0_10">
                                                                                            24
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            11
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarToday" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            12
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            13
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            14
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            15
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            16
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            17
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_Actualdate_DDD_C_AUX_0_0_11">
                                                                                            25
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            18
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            19
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            20
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            21
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            22
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            23
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            24
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_Actualdate_DDD_C_AUX_0_0_12">
                                                                                            26
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            25
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            26
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            27
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            28
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            29
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            30
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            1
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td className="dxeCalendarWeekNumber" id="Date_Actualdate_DDD_C_AUX_0_0_13">
                                                                                            27
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            2
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            3
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            4
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            5
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            6
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            7
                                                                                          </td>
                                                                                          <td className="dxeCalendarDay dxeCalendarWeekend dxeCalendarOtherMonth" savedcursor="[object Object]" style={{cursor: 'pointer'}}>
                                                                                            8
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                </tr>
                                                                              </tbody>
                                                                            </table>
                                                                          </td>
                                                                        </tr>
                                                                        <tr>
                                                                          <td className="dxeCalendarFooter">
                                                                            <table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody>
                                                                                <tr>
                                                                                  <td>
                                                                                    <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td id="Date_Actualdate_DDD_C_BT" className="dxeCalendarButton" onclick="aspxCalTodayClick('Date_Actualdate_DDD_C');" style={{width: '37px'}}>
                                                                                            <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>
                                                                                                    Today
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                  <td>
                                                                                    <div style={{width: '12px', fontSize: '0px'}}>
                                                                                    </div>
                                                                                  </td>
                                                                                  <td>
                                                                                    <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td id="Date_Actualdate_DDD_C_BC" className="dxeCalendarButton" onclick="aspxCalClearClick('Date_Actualdate_DDD_C');" style={{width: '37px'}}>
                                                                                            <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>
                                                                                                    Clear
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </td>
                                                                                </tr>
                                                                              </tbody>
                                                                            </table>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <input type="hidden" id="Date_Actualdate_DDD_C_FNPWS" name="Date_Actualdate_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" />
                                                                    <div id="Date_Actualdate_DDD_C_FNP_PW-1" style={{position: 'absolute', left: '0px', top: '0px', zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="Date_Actualdate_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody>
                                                                          <tr>
                                                                            <td onmousedown="aspxPWMDown(event,'Date_Actualdate_DDD_C_FNP',-1,false)" style={{width: '0px', cursor: 'default'}}>
                                                                              <table id="Date_Actualdate_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: '0px', borderCollapse: 'separate'}}>
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td id="Date_Actualdate_DDD_C_FNP_PWC-1" style={{height: '100%'}}>
                                                                                      <div id="Date_Actualdate_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav">
                                                                                          <div className="dxeCalendarFastNavMonthArea">
                                                                                            <table id="Date_Actualdate_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M0">
                                                                                                    Jan
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M1">
                                                                                                    Feb
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M2">
                                                                                                    Mar
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M3">
                                                                                                    Apr
                                                                                                  </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M4">
                                                                                                    May
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M5">
                                                                                                    Jun
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M6">
                                                                                                    Jul
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M7">
                                                                                                    Aug
                                                                                                  </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M8">
                                                                                                    Sep
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M9">
                                                                                                    Oct
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M10">
                                                                                                    Nov
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavMonth" id="Date_Actualdate_DDD_C_FNP_M11">
                                                                                                    Dec
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </div>
                                                                                          <div className="dxeCalendarFastNavYearArea">
                                                                                            <table id="Date_Actualdate_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: '8px'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('Date_Actualdate_DDD_C', -10)" rowSpan={2} style={{paddingRight: '8px', cursor: 'pointer'}}>
                                                                                                    <img className="dxEditors_edtCalendarFNPrevYear" src={DXR1} alt="<" />
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y0">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y1">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y2">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y3">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y4">
                                                                                                  </td>
                                                                                                  <td onclick="aspxCalFNYShuffle('Date_Actualdate_DDD_C', 10)" rowSpan={2} style={{paddingLeft: '8px', cursor: 'pointer'}}>
                                                                                                    <img className="dxEditors_edtCalendarFNNextYear" src={DXR1} alt=">" />
                                                                                                  </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y5">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y6">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y7">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y8">
                                                                                                  </td>
                                                                                                  <td className="dxeCalendarFastNavYear" id="Date_Actualdate_DDD_C_FNP_Y9">
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div className="dxeCalendarFastNavFooter" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="Date_Actualdate_DDD_C_FNP_BO" className="dxeCalendarButton" onclick="aspxCalFNBClick('Date_Actualdate_DDD_C', 'ok')" style={{width: '37px'}}>
                                                                                                  <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                                    <tbody>
                                                                                                      <tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>
                                                                                                          OK
                                                                                                        </td>
                                                                                                      </tr>
                                                                                                    </tbody>
                                                                                                  </table>
                                                                                                </td>
                                                                                                <td>
                                                                                                  <div style={{width: '11px'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td id="Date_Actualdate_DDD_C_FNP_BC" className="dxeCalendarButton" onclick="aspxCalFNBClick('Date_Actualdate_DDD_C', 'cancel')" style={{width: '37px'}}>
                                                                                                  <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: '37px', borderCollapse: 'separate'}}>
                                                                                                    <tbody>
                                                                                                      <tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>
                                                                                                          Cancel
                                                                                                        </td>
                                                                                                      </tr>
                                                                                                    </tbody>
                                                                                                  </table>
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </div>
                                                                                      </div>
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </td>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}}>
                                                                            </td>
                                                                          </tr>
                                                                          <tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}}>
                                                                            </td>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}>
                                                                              <div style={{height: '5px', width: '5px'}}>
                                                                              </div>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </div>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}}>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}}>
                                                        </td>
                                                        <td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}>
                                                          <div style={{height: '5px', width: '5px'}}>
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>
                                        <div>
                                          <div style={{position: 'relative', width: '0px', height: '0px'}}>
                                            <div className="dxKBSW">
                                              <input id="htmNotes_FFI" readOnly="readonly" style={{opacity: 0, width: '1px', height: '1px', position: 'relative', backgroundColor: 'transparent', margin: '0px', padding: '0px', borderWidth: '0px', fontSize: '0pt', top: '0px'}} disabled />
                                            </div>
                                          </div>
                                          <table className="dxheControl_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes" border={0} style={{borderCollapse: 'separate'}}>
                                            <tbody>
                                              <tr>
                                                <td id="htmNotes_MainCell" className="dx" style={{height: '100%', width: '100%'}}>
                                                  <table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '687px',border: 'Solid 1px #002D96' , borderCollapse: 'collapse'}}>
                                                    <tbody>
                                                      <tr id="htmNotes_TBRow">
                                                        <td>
                                                          <table className="dxtbControl_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_TD" border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td>
                                                                  <table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td><input type="hidden" id="htmNotes_TD_T0CI" name="htmNotes_TD_T0CI" defaultValue />
                                                                          <div className="dxmLite_Office2003Blue dxm-ltr">
                                                                            <div className="dxm-main dxm-horizontal dxmtb" id="htmNotes_TD_T0">
                                                                              <ul className="dx dxm-image-l dxm-gutter">
                                                                                <li title="Cut (Ctrl+X)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI0_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI0_T">
                                                                                    <img className="dxHtmlEditor_Icons_heCut_Office2003Blue dxm-image dxHtmlEditor_Icons_heCutDisabled_Office2003Blue" src={DXR1} alt="Cut (Ctrl+X)" id="htmNotes_TD_T0_DXI0_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heCut_Office2003Blue dxm-image" /><span title="Cut (Ctrl+X)" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI0_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Copy (Ctrl+C)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI1_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI1_T">
                                                                                    <img className="dxHtmlEditor_Icons_heCopy_Office2003Blue dxm-image dxHtmlEditor_Icons_heCopyDisabled_Office2003Blue" src={DXR1} alt="Copy (Ctrl+C)" id="htmNotes_TD_T0_DXI1_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heCopy_Office2003Blue dxm-image" /><span title="Copy (Ctrl+C)" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI1_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Paste (Ctrl+V)" className="dxm-item dxm-noSubMenu" id="htmNotes_TD_T0_DXI2_" style={{cursor: 'pointer'}}>
                                                                                  <div className="dxm-content" id="htmNotes_TD_T0_DXI2_T">
                                                                                    <img className="dxHtmlEditor_Icons_hePaste_Office2003Blue dxm-image" src={DXR1} alt="Paste (Ctrl+V)" id="htmNotes_TD_T0_DXI2_Img" /><span title="Paste (Ctrl+V)" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI2_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Paste from Word" className="dxm-item dxm-noSubMenu" id="htmNotes_TD_T0_DXI3_" style={{cursor: 'pointer'}}>
                                                                                  <div className="dxm-content" id="htmNotes_TD_T0_DXI3_T">
                                                                                    <img className="dxHtmlEditor_Icons_hePasteFromWord_Office2003Blue dxm-image" src={DXR1} alt="Paste from Word" id="htmNotes_TD_T0_DXI3_Img" /><span title="Paste from Word" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI4_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Undo (Ctrl+Z)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI4_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI4_T">
                                                                                    <img className="dxHtmlEditor_Icons_heUndo_Office2003Blue dxm-image dxHtmlEditor_Icons_heUndoDisabled_Office2003Blue" src={DXR1} alt="Undo (Ctrl+Z)" id="htmNotes_TD_T0_DXI4_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heUndo_Office2003Blue dxm-image" /><span title="Undo (Ctrl+Z)" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI4_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Redo (Ctrl+Y)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI5_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI5_T">
                                                                                    <img className="dxHtmlEditor_Icons_heRedo_Office2003Blue dxm-image dxHtmlEditor_Icons_heRedoDisabled_Office2003Blue" src={DXR1} alt="Redo (Ctrl+Y)" id="htmNotes_TD_T0_DXI5_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heRedo_Office2003Blue dxm-image" /><span title="Redo (Ctrl+Y)" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI6_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Remove Format" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI6_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI6_T">
                                                                                    <img className="dxHtmlEditor_Icons_heRemoveFormat_Office2003Blue dxm-image dxHtmlEditor_Icons_heRemoveFormatDisabled_Office2003Blue" src={DXR1} alt="Remove Format" id="htmNotes_TD_T0_DXI6_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heRemoveFormat_Office2003Blue dxm-image" /><span title="Remove Format" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI7_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Superscript" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI7_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI7_T">
                                                                                    <img className="dxHtmlEditor_Icons_heSuperscript_Office2003Blue dxm-image dxHtmlEditor_Icons_heSuperscriptDisabled_Office2003Blue" src={DXR1} alt="Superscript" id="htmNotes_TD_T0_DXI7_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heSuperscript_Office2003Blue dxm-image" /><span title="Superscript" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI7_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Subscript" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI8_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI8_T">
                                                                                    <img className="dxHtmlEditor_Icons_heSubscript_Office2003Blue dxm-image dxHtmlEditor_Icons_heSubscriptDisabled_Office2003Blue" src={DXR1} alt="Subscript" id="htmNotes_TD_T0_DXI8_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heSubscript_Office2003Blue dxm-image" /><span title="Subscript" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI9_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Ordered List" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI9_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI9_T">
                                                                                    <img className="dxHtmlEditor_Icons_heInsertOrderedList_Office2003Blue dxm-image dxHtmlEditor_Icons_heInsertOrderedListDisabled_Office2003Blue" src={DXR1} alt="Ordered List" id="htmNotes_TD_T0_DXI9_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heInsertOrderedList_Office2003Blue dxm-image" /><span title="Ordered List" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI9_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Bullet List" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI10_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI10_T">
                                                                                    <img className="dxHtmlEditor_Icons_heInsertUnorderedList_Office2003Blue dxm-image dxHtmlEditor_Icons_heInsertUnorderedListDisabled_Office2003Blue" src={DXR1} alt="Bullet List" id="htmNotes_TD_T0_DXI10_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heInsertUnorderedList_Office2003Blue dxm-image" /><span title="Bullet List" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI11_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Indent" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI11_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI11_T">
                                                                                    <img className="dxHtmlEditor_Icons_heIndent_Office2003Blue dxm-image dxHtmlEditor_Icons_heIndentDisabled_Office2003Blue" src={DXR1} alt="Indent" id="htmNotes_TD_T0_DXI11_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heIndent_Office2003Blue dxm-image" /><span title="Indent" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI11_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Outdent" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI12_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI12_T">
                                                                                    <img className="dxHtmlEditor_Icons_heOutdent_Office2003Blue dxm-image dxHtmlEditor_Icons_heOutdentDisabled_Office2003Blue" src={DXR1} alt="Outdent" id="htmNotes_TD_T0_DXI12_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heOutdent_Office2003Blue dxm-image" /><span title="Outdent" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI13_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Insert Link" className="dxm-item dxm-noSubMenu" id="htmNotes_TD_T0_DXI13_" style={{cursor: 'pointer'}}>
                                                                                  <div className="dxm-content" id="htmNotes_TD_T0_DXI13_T">
                                                                                    <img className="dxHtmlEditor_Icons_heInsertLinkDialog_Office2003Blue dxm-image" src={DXR1} alt="Insert Link" id="htmNotes_TD_T0_DXI13_Img" /><span title="Insert Link" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI13_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Remove Link" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T0_DXI14_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T0_DXI14_T">
                                                                                    <img className="dxHtmlEditor_Icons_heUnlink_Office2003Blue dxm-image dxHtmlEditor_Icons_heUnlinkDisabled_Office2003Blue" src={DXR1} alt="Remove Link" id="htmNotes_TD_T0_DXI14_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heUnlink_Office2003Blue dxm-image" /><span title="Remove Link" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T0_DXI14_II" style={{height: '25px'}}>
                                                                                </li>
                                                                                <li title="Insert Image" className="dxm-item dxm-noSubMenu" id="htmNotes_TD_T0_DXI15_" style={{cursor: 'pointer'}}>
                                                                                  <div className="dxm-content" id="htmNotes_TD_T0_DXI15_T">
                                                                                    <img className="dxHtmlEditor_Icons_heInsertImageDialog_Office2003Blue dxm-image" src={DXR1} alt="Insert Image" id="htmNotes_TD_T0_DXI15_Img" /><span title="Insert Image" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI16_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Insert Table..." className="dxm-item dxm-dropDownMode" id="htmNotes_TD_T0_DXI16_" style={{cursor: 'pointer'}}>
                                                                                  <div className="dxm-content" id="htmNotes_TD_T0_DXI16_T">
                                                                                    <img className="dxHtmlEditor_Icons_heInsertTableDialog_Office2003Blue dxm-image" src={DXR1} alt="Insert Table..." id="htmNotes_TD_T0_DXI16_Img" /><span title="Insert Table..." />
                                                                                  </div>
                                                                                  <div className="dxm-popOut" id="htmNotes_TD_T0_DXI16_P">
                                                                                    <img className="dxHtmlEditor_heToolbarPopOut_Office2003Blue dxm-pImage" src={DXR1} alt="v" id="htmNotes_TD_T0_DXI16_PImg" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T0_DXI17_IS" style={{height: '25px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Full Screen (F11)" className="dxm-item dxm-noSubMenu" id="htmNotes_TD_T0_DXI17_" style={{cursor: 'pointer'}}>
                                                                                  <div className="dxm-content" id="htmNotes_TD_T0_DXI17_T">
                                                                                    <img className="dxHtmlEditor_Icons_heFullscreen_Office2003Blue dxm-image" src={DXR1} alt="Full Screen (F11)" id="htmNotes_TD_T0_DXI17_Img" /><span title="Full Screen (F11)" />
                                                                                  </div>
                                                                                </li>
                                                                              </ul>
                                                                            </div>
                                                                            <b className="dx-clear" />
                                                                            <div id="htmNotes_TD_T0_DXM16_" style={{zIndex: 20000, display: 'none', position: 'absolute'}}>
                                                                              <div className="dxm-shadow dxm-popup dxmtb" id="htmNotes_TD_T0_DXME16_">
                                                                                <ul className="dx dxm-gutter">
                                                                                  <li title="Insert Table..." className="dxm-item" id="htmNotes_TD_T0_DXI16i0_" style={{cursor: 'pointer'}}>
                                                                                    <div className="dxm-content dxm-hasText" id="htmNotes_TD_T0_DXI16i0_T">
                                                                                      <img className="dxHtmlEditor_Icons_heInsertTableDialog_Office2003Blue dxm-image" src={DXR1} alt="Insert Table..." id="htmNotes_TD_T0_DXI16i0_Img" /><span title="Insert Table...">Insert
                                                                                        Table...</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-separator" id="htmNotes_TD_T0_DXI16i1_IS">
                                                                                    <b />
                                                                                  </li>
                                                                                  <li title="Table Properties..." className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i1_" savedcursor="pointer" style={{}}>
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i1_T">
                                                                                      <img className="dxHtmlEditor_Icons_heChangeTableDialog_Office2003Blue dxm-image dxHtmlEditor_Icons_heChangeTableDialogDisabled_Office2003Blue" src={DXR1} alt="Table Properties..." id="htmNotes_TD_T0_DXI16i1_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heChangeTableDialog_Office2003Blue dxm-image" /><span title="Table Properties...">Table
                                                                                        Properties...</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i1_II">
                                                                                  </li>
                                                                                  <li title="Row Properties..." className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i2_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i2_T">
                                                                                      <img className="dxHtmlEditor_Icons_heChangeTableRowDialog_Office2003Blue dxm-image dxHtmlEditor_Icons_heChangeTableRowDialogDisabled_Office2003Blue" src={DXR1} alt="Row Properties..." id="htmNotes_TD_T0_DXI16i2_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heChangeTableRowDialog_Office2003Blue dxm-image" /><span title="Row Properties...">Row
                                                                                        Properties...</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i2_II">
                                                                                  </li>
                                                                                  <li title="Column Properties..." className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i3_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i3_T">
                                                                                      <img className="dxHtmlEditor_Icons_heChangeTableColumnDialog_Office2003Blue dxm-image dxHtmlEditor_Icons_heChangeTableColumnDialogDisabled_Office2003Blue" src={DXR1} alt="Column Properties..." id="htmNotes_TD_T0_DXI16i3_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heChangeTableColumnDialog_Office2003Blue dxm-image" /><span title="Column Properties...">Column
                                                                                        Properties...</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i3_II">
                                                                                  </li>
                                                                                  <li title="Cell Properties..." className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i4_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i4_T">
                                                                                      <img className="dxHtmlEditor_Icons_heChangeTableCellDialog_Office2003Blue dxm-image dxHtmlEditor_Icons_heChangeTableCellDialogDisabled_Office2003Blue" src={DXR1} alt="Cell Properties..." id="htmNotes_TD_T0_DXI16i4_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heChangeTableCellDialog_Office2003Blue dxm-image" /><span title="Cell Properties...">Cell
                                                                                        Properties...</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-separator" id="htmNotes_TD_T0_DXI16i5_IS">
                                                                                    <b />
                                                                                  </li>
                                                                                  <li title="Insert Row Above" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i5_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i5_T">
                                                                                      <img className="dxHtmlEditor_Icons_heInsertTableRowAbove_Office2003Blue dxm-image dxHtmlEditor_Icons_heInsertTableRowAboveDisabled_Office2003Blue" src={DXR1} alt="Insert Row Above" id="htmNotes_TD_T0_DXI16i5_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heInsertTableRowAbove_Office2003Blue dxm-image" /><span title="Insert Row Above">Insert
                                                                                        Row
                                                                                        Above</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i5_II">
                                                                                  </li>
                                                                                  <li title="Insert Row Below" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i6_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i6_T">
                                                                                      <img className="dxHtmlEditor_Icons_heInsertTableRowBelow_Office2003Blue dxm-image dxHtmlEditor_Icons_heInsertTableRowBelowDisabled_Office2003Blue" src={DXR1} alt="Insert Row Below" id="htmNotes_TD_T0_DXI16i6_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heInsertTableRowBelow_Office2003Blue dxm-image" /><span title="Insert Row Below">Insert
                                                                                        Row
                                                                                        Below</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i6_II">
                                                                                  </li>
                                                                                  <li title="Insert Column to the Left" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i7_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i7_T">
                                                                                      <img className="dxHtmlEditor_Icons_heInsertTableColumnOnLeft_Office2003Blue dxm-image dxHtmlEditor_Icons_heInsertTableColumnOnLeftDisabled_Office2003Blue" src={DXR1} alt="Insert Column to the Left" id="htmNotes_TD_T0_DXI16i7_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heInsertTableColumnOnLeft_Office2003Blue dxm-image" /><span title="Insert Column to the Left">Insert
                                                                                        Column
                                                                                        to
                                                                                        the
                                                                                        Left</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i7_II">
                                                                                  </li>
                                                                                  <li title="Insert Column to the Right" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i8_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i8_T">
                                                                                      <img className="dxHtmlEditor_Icons_heInsertTableColumnOnRight_Office2003Blue dxm-image dxHtmlEditor_Icons_heInsertTableColumnOnRightDisabled_Office2003Blue" src={DXR1} alt="Insert Column to the Right" id="htmNotes_TD_T0_DXI16i8_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heInsertTableColumnOnRight_Office2003Blue dxm-image" /><span title="Insert Column to the Right">Insert
                                                                                        Column
                                                                                        to
                                                                                        the
                                                                                        Right</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-separator" id="htmNotes_TD_T0_DXI16i9_IS">
                                                                                    <b />
                                                                                  </li>
                                                                                  <li title="Split Horizontally" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i9_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i9_T">
                                                                                      <img className="dxHtmlEditor_Icons_heSplitTableCellHorizontal_Office2003Blue dxm-image dxHtmlEditor_Icons_heSplitTableCellHorizontalDisabled_Office2003Blue" src={DXR1} alt="Split Horizontally" id="htmNotes_TD_T0_DXI16i9_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heSplitTableCellHorizontal_Office2003Blue dxm-image" /><span title="Split Horizontally">Split
                                                                                        Horizontally</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i9_II">
                                                                                  </li>
                                                                                  <li title="Split Vertically" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i10_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i10_T">
                                                                                      <img className="dxHtmlEditor_Icons_heSplitTableCellVertical_Office2003Blue dxm-image dxHtmlEditor_Icons_heSplitTableCellVerticalDisabled_Office2003Blue" src={DXR1} alt="Split Vertically" id="htmNotes_TD_T0_DXI16i10_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heSplitTableCellVertical_Office2003Blue dxm-image" /><span title="Split Vertically">Split
                                                                                        Vertically</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i10_II">
                                                                                  </li>
                                                                                  <li title="Merge Right" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i11_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i11_T">
                                                                                      <img className="dxHtmlEditor_Icons_heMergeTableCellHorizontal_Office2003Blue dxm-image dxHtmlEditor_Icons_heMergeTableCellHorizontalDisabled_Office2003Blue" src={DXR1} alt="Merge Right" id="htmNotes_TD_T0_DXI16i11_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heMergeTableCellHorizontal_Office2003Blue dxm-image" /><span title="Merge Right">Merge
                                                                                        Right</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i11_II">
                                                                                  </li>
                                                                                  <li title="Merge Down" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i12_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i12_T">
                                                                                      <img className="dxHtmlEditor_Icons_heMergeTableCellVertical_Office2003Blue dxm-image dxHtmlEditor_Icons_heMergeTableCellVerticalDisabled_Office2003Blue" src={DXR1} alt="Merge Down" id="htmNotes_TD_T0_DXI16i12_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heMergeTableCellVertical_Office2003Blue dxm-image" /><span title="Merge Down">Merge
                                                                                        Down</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-separator" id="htmNotes_TD_T0_DXI16i13_IS">
                                                                                    <b />
                                                                                  </li>
                                                                                  <li title="Delete Table" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i13_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i13_T">
                                                                                      <img className="dxHtmlEditor_Icons_heDeleteTable_Office2003Blue dxm-image dxHtmlEditor_Icons_heDeleteTableDisabled_Office2003Blue" src={DXR1} alt="Delete Table" id="htmNotes_TD_T0_DXI16i13_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heDeleteTable_Office2003Blue dxm-image" /><span title="Delete Table">Delete
                                                                                        Table</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i13_II">
                                                                                  </li>
                                                                                  <li title="Delete Row" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i14_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i14_T">
                                                                                      <img className="dxHtmlEditor_Icons_heDeleteTableRow_Office2003Blue dxm-image dxHtmlEditor_Icons_heDeleteTableRowDisabled_Office2003Blue" src={DXR1} alt="Delete Row" id="htmNotes_TD_T0_DXI16i14_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heDeleteTableRow_Office2003Blue dxm-image" /><span title="Delete Row">Delete
                                                                                        Row</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                  <li className="dxm-spacing" id="htmNotes_TD_T0_DXI16i14_II">
                                                                                  </li>
                                                                                  <li title="Delete Column" className="dxm-item dxm-disabled" id="htmNotes_TD_T0_DXI16i15_" style={{}} savedcursor="pointer">
                                                                                    <div className="dxm-content dxm-hasText dxm-disabled" id="htmNotes_TD_T0_DXI16i15_T">
                                                                                      <img className="dxHtmlEditor_Icons_heDeleteTableColumn_Office2003Blue dxm-image dxHtmlEditor_Icons_heDeleteTableColumnDisabled_Office2003Blue" src={DXR1} alt="Delete Column" id="htmNotes_TD_T0_DXI16i15_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heDeleteTableColumn_Office2003Blue dxm-image" /><span title="Delete Column">Delete
                                                                                        Column</span>
                                                                                    </div>
                                                                                    <b className="dx-clear" />
                                                                                  </li>
                                                                                </ul>
                                                                              </div>
                                                                            </div>
                                                                            <div className="dxmBrdCor_Office2003Blue" style={{display: 'none', zIndex: 20001, position: 'absolute'}} id="htmNotes_TD_T0_DXMBC16_">
                                                                            </div>
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="dxtbSpacing_Office2003Blue">
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td><input type="hidden" id="htmNotes_TD_T1CI" name="htmNotes_TD_T1CI" defaultValue />
                                                                          <div className="dxmLite_Office2003Blue dxm-ltr">
                                                                            <div className="dxm-main dxm-horizontal dxmtb" id="htmNotes_TD_T1">
                                                                              <ul className="dx dxm-image-l dxm-gutter">
                                                                                <li title="Paragraph" className="dxtb-comboBoxMenuItem dxm-item dxm-noSubMenu dxm-noImage dxm-disabled" id="htmNotes_TD_T1_DXI0_" savedcursor="[object Object]">
                                                                                  <table title="Paragraph" className="dxeButtonEdit_Office2003Blue dxeDisabled_Office2003Blue" cellSpacing={1} cellPadding={0} id="htmNotes_TD_T1_ITCNT0_ctl00" border={0} style={{width: '120px'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td style={{display: 'none'}}>
                                                                                          <input id="htmNotes_TD_T1_ITCNT0_ctl00_VI" name="htmNotes_TD_T1_ITCNT0_ctl00_VI" type="hidden" />
                                                                                        </td>
                                                                                        <td className="dxic" style={{width: '100%', paddingLeft: '1px', paddingRight: '1px', paddingTop: '1px', paddingBottom: '1px'}} savedonclick="[object Object]" savedonkeyup="[object Object]" savedonmousedown="return aspxDDDropDown('htmNotes_TD_T1_ITCNT0_ctl00', event)" savedonmouseup="[object Object]">
                                                                                          <input className="dxeEditArea_Office2003Blue dxeEditAreaSys dxeDisabled_Office2003Blue" name="ctl00$MainContent$htmNotes$TD$T1$ITCNT0$TC$ctl00" id="htmNotes_TD_T1_ITCNT0_ctl00_I" onchange="aspxETextChanged('htmNotes_TD_T1_ITCNT0_ctl00')" type="text" readOnly="readonly" style={{height: '15px', cursor: 'default'}} autoComplete="off" savedtabindex="[object Object]" tabIndex={-1} savedonclick="[object Object]" savedonfocus="aspxEGotFocus('htmNotes_TD_T1_ITCNT0_ctl00')" savedonblur="aspxELostFocus('htmNotes_TD_T1_ITCNT0_ctl00')" savedonkeydown="aspxEKeyDown('htmNotes_TD_T1_ITCNT0_ctl00', event)" savedonkeypress="[object Object]" savedonkeyup="[object Object]" disabled />
                                                                                        </td>
                                                                                        <td id="htmNotes_TD_T1_ITCNT0_ctl00_B-1" className="dxeButtonEditButton_Office2003Blue dxeDisabled_Office2003Blue dxeButtonDisabled_Office2003Blue" style={{KhtmlUserSelect: 'none'}} savedonclick="[object Object]" savedondblclick="[object Object]" savedonmousedown="return aspxDDDropDown('htmNotes_TD_T1_ITCNT0_ctl00', event)" savedonmouseup="[object Object]">
                                                                                          <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td className="dx">
                                                                                                  <img id="htmNotes_TD_T1_ITCNT0_ctl00_B-1Img" className="dxEditors_edtDropDown_Office2003Blue dxEditors_edtDropDownDisabled_Office2003Blue" src={DXR1} alt="v" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxEditors_edtDropDown_Office2003Blue" />
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                  <input type="hidden" id="htmNotes_TD_T1_ITCNT0_ctl00_DDDWS" name="htmNotes_TD_T1_ITCNT0_ctl00_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" />
                                                                                  <div id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_PW-1" style={{position: 'absolute', left: '0px', top: '0px', zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                                    <table id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td onmousedown="aspxPWMDown(event,'htmNotes_TD_T1_ITCNT0_ctl00_DDD',-1,false)" style={{width: '200px', cursor: 'default'}}>
                                                                                            <table id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: '200px', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_PWC-1" style={{height: '100%'}}>
                                                                                                    <div id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_CSD-1">
                                                                                                      <table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td valign="top">
                                                                                                              <div id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                                                                <input id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_VI" type="hidden" name="ctl00$MainContent$htmNotes$TD$T1$ITCNT0$TC$ctl00$DDD$L" defaultValue />
                                                                                                                <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                                                  <tbody>
                                                                                                                    <tr id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">
                                                                                                                        &nbsp;
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                  </tbody>
                                                                                                                </table>
                                                                                                                <table id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                                                  <tbody>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI0T0">
                                                                                                                        <p style={{margin: '0px'}}>
                                                                                                                          Normal
                                                                                                                        </p>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI1T0">
                                                                                                                        <h1 style={{margin: '0px'}}>
                                                                                                                          Heading
                                                                                                                          1
                                                                                                                        </h1>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI2T0">
                                                                                                                        <h2 style={{margin: '0px'}}>
                                                                                                                          Heading
                                                                                                                          2
                                                                                                                        </h2>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI3T0">
                                                                                                                        <h3 style={{margin: '0px'}}>
                                                                                                                          Heading
                                                                                                                          3
                                                                                                                        </h3>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI4T0">
                                                                                                                        <h4 style={{margin: '0px'}}>
                                                                                                                          Heading
                                                                                                                          4
                                                                                                                        </h4>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI5T0">
                                                                                                                        <h5 style={{margin: '0px'}}>
                                                                                                                          Heading
                                                                                                                          5
                                                                                                                        </h5>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI6T0">
                                                                                                                        <h6 style={{margin: '0px'}}>
                                                                                                                          Heading
                                                                                                                          6
                                                                                                                        </h6>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI7T0">
                                                                                                                        <address style={{margin: '0px'}}>
                                                                                                                          Address
                                                                                                                        </address>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT0_ctl00_DDD_L_LBI8T0">
                                                                                                                        <div style={{margin: '0px'}}>
                                                                                                                          Normal
                                                                                                                          (DIV)
                                                                                                                        </div>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                  </tbody>
                                                                                                                </table>
                                                                                                              </div>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                        </tbody>
                                                                                                      </table>
                                                                                                    </div>
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </td>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}}>
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}}>
                                                                                          </td>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}>
                                                                                            <div style={{height: '5px', width: '5px'}}>
                                                                                            </div>
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI0_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Font Name" className="dxtb-comboBoxMenuItem dxm-item dxm-noSubMenu dxm-noImage dxm-disabled" id="htmNotes_TD_T1_DXI1_" savedcursor="[object Object]">
                                                                                  <table title="Font Name" className="dxeButtonEdit_Office2003Blue dxeDisabled_Office2003Blue" cellSpacing={1} cellPadding={0} id="htmNotes_TD_T1_ITCNT1_ctl00" border={0} style={{width: '140px'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td style={{display: 'none'}}>
                                                                                          <input id="htmNotes_TD_T1_ITCNT1_ctl00_VI" name="htmNotes_TD_T1_ITCNT1_ctl00_VI" type="hidden" />
                                                                                        </td>
                                                                                        <td className="dxic" style={{width: '100%', paddingLeft: '1px', paddingRight: '1px', paddingTop: '1px', paddingBottom: '1px'}} savedonclick="[object Object]" savedonkeyup="[object Object]" savedonmousedown="return aspxDDDropDown('htmNotes_TD_T1_ITCNT1_ctl00', event)" savedonmouseup="[object Object]">
                                                                                          <input className="dxeEditArea_Office2003Blue dxeEditAreaSys dxeDisabled_Office2003Blue" name="ctl00$MainContent$htmNotes$TD$T1$ITCNT1$TC$ctl00" id="htmNotes_TD_T1_ITCNT1_ctl00_I" onchange="aspxETextChanged('htmNotes_TD_T1_ITCNT1_ctl00')" type="text" readOnly="readonly" style={{height: '15px', cursor: 'default'}} autoComplete="off" savedtabindex="[object Object]" tabIndex={-1} savedonclick="[object Object]" savedonfocus="aspxEGotFocus('htmNotes_TD_T1_ITCNT1_ctl00')" savedonblur="aspxELostFocus('htmNotes_TD_T1_ITCNT1_ctl00')" savedonkeydown="aspxEKeyDown('htmNotes_TD_T1_ITCNT1_ctl00', event)" savedonkeypress="[object Object]" savedonkeyup="[object Object]" disabled />
                                                                                        </td>
                                                                                        <td id="htmNotes_TD_T1_ITCNT1_ctl00_B-1" className="dxeButtonEditButton_Office2003Blue dxeDisabled_Office2003Blue dxeButtonDisabled_Office2003Blue" style={{KhtmlUserSelect: 'none'}} savedonclick="[object Object]" savedondblclick="[object Object]" savedonmousedown="return aspxDDDropDown('htmNotes_TD_T1_ITCNT1_ctl00', event)" savedonmouseup="[object Object]">
                                                                                          <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td className="dx">
                                                                                                  <img id="htmNotes_TD_T1_ITCNT1_ctl00_B-1Img" className="dxEditors_edtDropDown_Office2003Blue dxEditors_edtDropDownDisabled_Office2003Blue" src={DXR1} alt="v" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxEditors_edtDropDown_Office2003Blue" />
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                  <input type="hidden" id="htmNotes_TD_T1_ITCNT1_ctl00_DDDWS" name="htmNotes_TD_T1_ITCNT1_ctl00_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" />
                                                                                  <div id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_PW-1" style={{position: 'absolute', left: '0px', top: '0px', zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                                    <table id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td onmousedown="aspxPWMDown(event,'htmNotes_TD_T1_ITCNT1_ctl00_DDD',-1,false)" style={{width: '200px', cursor: 'default'}}>
                                                                                            <table id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: '200px', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_PWC-1" style={{height: '100%'}}>
                                                                                                    <div id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_CSD-1">
                                                                                                      <table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td valign="top">
                                                                                                              <div id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                                                                <input id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_VI" type="hidden" name="ctl00$MainContent$htmNotes$TD$T1$ITCNT1$TC$ctl00$DDD$L" defaultValue />
                                                                                                                <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                                                  <tbody>
                                                                                                                    <tr id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">
                                                                                                                        &nbsp;
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                  </tbody>
                                                                                                                </table>
                                                                                                                <table id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                                                  <tbody>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI0T0">
                                                                                                                        <font face="Times New Roman">
                                                                                                                          Times
                                                                                                                          New
                                                                                                                          Roman
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI1T0">
                                                                                                                        <font face="Tahoma">
                                                                                                                          Tahoma
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI2T0">
                                                                                                                        <font face="Verdana">
                                                                                                                          Verdana
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI3T0">
                                                                                                                        <font face="Arial">
                                                                                                                          Arial
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI4T0">
                                                                                                                        <font face="MS Sans Serif">
                                                                                                                          MS
                                                                                                                          Sans
                                                                                                                          Serif
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT1_ctl00_DDD_L_LBI5T0">
                                                                                                                        <font face="Courier">
                                                                                                                          Courier
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                  </tbody>
                                                                                                                </table>
                                                                                                              </div>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                        </tbody>
                                                                                                      </table>
                                                                                                    </div>
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </td>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}}>
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}}>
                                                                                          </td>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}>
                                                                                            <div style={{height: '5px', width: '5px'}}>
                                                                                            </div>
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI1_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Font Size" className="dxtb-comboBoxMenuItem dxm-item dxm-noSubMenu dxm-noImage dxm-disabled" id="htmNotes_TD_T1_DXI2_" savedcursor="[object Object]">
                                                                                  <table title="Font Size" className="dxeButtonEdit_Office2003Blue dxeDisabled_Office2003Blue" cellSpacing={1} cellPadding={0} id="htmNotes_TD_T1_ITCNT2_ctl00" border={0} style={{width: '90px'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td style={{display: 'none'}}>
                                                                                          <input id="htmNotes_TD_T1_ITCNT2_ctl00_VI" name="htmNotes_TD_T1_ITCNT2_ctl00_VI" type="hidden" />
                                                                                        </td>
                                                                                        <td className="dxic" style={{width: '100%', paddingLeft: '1px', paddingRight: '1px', paddingTop: '1px', paddingBottom: '1px'}} savedonclick="[object Object]" savedonkeyup="[object Object]" savedonmousedown="return aspxDDDropDown('htmNotes_TD_T1_ITCNT2_ctl00', event)" savedonmouseup="[object Object]">
                                                                                          <input className="dxeEditArea_Office2003Blue dxeEditAreaSys dxeDisabled_Office2003Blue" name="ctl00$MainContent$htmNotes$TD$T1$ITCNT2$TC$ctl00" id="htmNotes_TD_T1_ITCNT2_ctl00_I" onchange="aspxETextChanged('htmNotes_TD_T1_ITCNT2_ctl00')" type="text" readOnly="readonly" style={{height: '15px', cursor: 'default'}} autoComplete="off" savedtabindex="[object Object]" tabIndex={-1} savedonclick="[object Object]" savedonfocus="aspxEGotFocus('htmNotes_TD_T1_ITCNT2_ctl00')" savedonblur="aspxELostFocus('htmNotes_TD_T1_ITCNT2_ctl00')" savedonkeydown="aspxEKeyDown('htmNotes_TD_T1_ITCNT2_ctl00', event)" savedonkeypress="[object Object]" savedonkeyup="[object Object]" disabled />
                                                                                        </td>
                                                                                        <td id="htmNotes_TD_T1_ITCNT2_ctl00_B-1" className="dxeButtonEditButton_Office2003Blue dxeDisabled_Office2003Blue dxeButtonDisabled_Office2003Blue" style={{KhtmlUserSelect: 'none'}} savedonclick="[object Object]" savedondblclick="[object Object]" savedonmousedown="return aspxDDDropDown('htmNotes_TD_T1_ITCNT2_ctl00', event)" savedonmouseup="[object Object]">
                                                                                          <table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td className="dx">
                                                                                                  <img id="htmNotes_TD_T1_ITCNT2_ctl00_B-1Img" className="dxEditors_edtDropDown_Office2003Blue dxEditors_edtDropDownDisabled_Office2003Blue" src={DXR1} alt="v" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxEditors_edtDropDown_Office2003Blue" />
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                  <input type="hidden" id="htmNotes_TD_T1_ITCNT2_ctl00_DDDWS" name="htmNotes_TD_T1_ITCNT2_ctl00_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" />
                                                                                  <div id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_PW-1" style={{position: 'absolute', left: '0px', top: '0px', zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                                    <table id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                          <td onmousedown="aspxPWMDown(event,'htmNotes_TD_T1_ITCNT2_ctl00_DDD',-1,false)" style={{width: '200px', cursor: 'default'}}>
                                                                                            <table id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: '200px', borderCollapse: 'separate'}}>
                                                                                              <tbody>
                                                                                                <tr>
                                                                                                  <td id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_PWC-1" style={{height: '100%'}}>
                                                                                                    <div id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_CSD-1">
                                                                                                      <table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td valign="top">
                                                                                                              <div id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                                                                <input id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_VI" type="hidden" name="ctl00$MainContent$htmNotes$TD$T1$ITCNT2$TC$ctl00$DDD$L" defaultValue />
                                                                                                                <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                                                  <tbody>
                                                                                                                    <tr id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">
                                                                                                                        &nbsp;
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                  </tbody>
                                                                                                                </table>
                                                                                                                <table id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                                                  <tbody>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI0T0">
                                                                                                                        <font size={1}>
                                                                                                                          1
                                                                                                                          (8pt)
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI1T0">
                                                                                                                        <font size={2}>
                                                                                                                          2
                                                                                                                          (10pt)
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI2T0">
                                                                                                                        <font size={3}>
                                                                                                                          3
                                                                                                                          (12pt)
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI3T0">
                                                                                                                        <font size={4}>
                                                                                                                          4
                                                                                                                          (14pt)
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI4T0">
                                                                                                                        <font size={5}>
                                                                                                                          5
                                                                                                                          (18pt)
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI5T0">
                                                                                                                        <font size={6}>
                                                                                                                          6
                                                                                                                          (24pt)
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                    <tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                                                      <td className="dxeListBoxItem_Office2003Blue" id="htmNotes_TD_T1_ITCNT2_ctl00_DDD_L_LBI6T0">
                                                                                                                        <font size={7}>
                                                                                                                          7
                                                                                                                          (36pt)
                                                                                                                        </font>
                                                                                                                      </td>
                                                                                                                    </tr>
                                                                                                                  </tbody>
                                                                                                                </table>
                                                                                                              </div>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                        </tbody>
                                                                                                      </table>
                                                                                                    </div>
                                                                                                  </td>
                                                                                                </tr>
                                                                                              </tbody>
                                                                                            </table>
                                                                                          </td>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}}>
                                                                                          </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}}>
                                                                                          </td>
                                                                                          <td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}>
                                                                                            <div style={{height: '5px', width: '5px'}}>
                                                                                            </div>
                                                                                          </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T1_DXI3_IS" style={{height: '23px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Bold (CTRL+B)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T1_DXI3_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI3_T">
                                                                                    <img className="dxHtmlEditor_Icons_heBold_Office2003Blue dxm-image dxHtmlEditor_Icons_heBoldDisabled_Office2003Blue" src={DXR1} alt="Bold (CTRL+B)" id="htmNotes_TD_T1_DXI3_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heBold_Office2003Blue dxm-image" /><span title="Bold (CTRL+B)" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI3_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Italic (Ctrl+I)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T1_DXI4_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI4_T">
                                                                                    <img className="dxHtmlEditor_Icons_heItalic_Office2003Blue dxm-image dxHtmlEditor_Icons_heItalicDisabled_Office2003Blue" src={DXR1} alt="Italic (Ctrl+I)" id="htmNotes_TD_T1_DXI4_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heItalic_Office2003Blue dxm-image" /><span title="Italic (Ctrl+I)" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI4_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Underline" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T1_DXI5_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI5_T">
                                                                                    <img className="dxHtmlEditor_Icons_heUnderline_Office2003Blue dxm-image dxHtmlEditor_Icons_heUnderlineDisabled_Office2003Blue" src={DXR1} alt="Underline" id="htmNotes_TD_T1_DXI5_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heUnderline_Office2003Blue dxm-image" /><span title="Underline" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI5_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Strikethrough" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T1_DXI6_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI6_T">
                                                                                    <img className="dxHtmlEditor_Icons_heStrikethrough_Office2003Blue dxm-image dxHtmlEditor_Icons_heStrikethroughDisabled_Office2003Blue" src={DXR1} alt="Strikethrough" id="htmNotes_TD_T1_DXI6_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heStrikethrough_Office2003Blue dxm-image" /><span title="Strikethrough" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T1_DXI7_IS" style={{height: '23px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Align Left" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T1_DXI7_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI7_T">
                                                                                    <img className="dxHtmlEditor_Icons_heLeft_Office2003Blue dxm-image dxHtmlEditor_Icons_heLeftDisabled_Office2003Blue" src={DXR1} alt="Align Left" id="htmNotes_TD_T1_DXI7_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heLeft_Office2003Blue dxm-image" /><span title="Align Left" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI7_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Align Center" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T1_DXI8_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI8_T">
                                                                                    <img className="dxHtmlEditor_Icons_heCenter_Office2003Blue dxm-image dxHtmlEditor_Icons_heCenterDisabled_Office2003Blue" src={DXR1} alt="Align Center" id="htmNotes_TD_T1_DXI8_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heCenter_Office2003Blue dxm-image" /><span title="Align Center" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI8_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Align Right" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmNotes_TD_T1_DXI9_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI9_T">
                                                                                    <img className="dxHtmlEditor_Icons_heRight_Office2003Blue dxm-image dxHtmlEditor_Icons_heRightDisabled_Office2003Blue" src={DXR1} alt="Align Right" id="htmNotes_TD_T1_DXI9_Img" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heRight_Office2003Blue dxm-image" /><span title="Align Right" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-separator" id="htmNotes_TD_T1_DXI10_IS" style={{height: '23px'}}>
                                                                                  <b />
                                                                                </li>
                                                                                <li title="Back Color" className="dxm-item dxtb-cb dxm-dropDownMode dxm-noImage dxm-disabled" id="htmNotes_TD_T1_DXI10_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI10_T">
                                                                                    <div title="Back Color" className="dxtcbControl_Office2003Blue " id="htmNotes_TD_T1_ITTCNT10_backcolor">
                                                                                      <img id="htmNotes_TD_T1_ITTCNT10_backcolor_P" title="Back Color" className="dxHtmlEditor_Icons_heBackColor_Office2003Blue dxHtmlEditor_Icons_heBackColorDisabled_Office2003Blue" src={DXR1} alt="Back Color" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heBackColor_Office2003Blue" />
                                                                                      <div id="htmNotes_TD_T1_ITTCNT10_backcolor_CD" className="dxtcbColorDiv_Office2003Blue" style={{backgroundColor: '#FFFFFF'}}>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div className="dxm-popOut dxm-disabled" id="htmNotes_TD_T1_DXI10_P">
                                                                                    <img className="dxHtmlEditor_heToolbarPopOut_Office2003Blue dxm-pImage" src={DXR1} alt="v" id="htmNotes_TD_T1_DXI10_PImg" />
                                                                                  </div>
                                                                                </li>
                                                                                <li className="dxm-spacing" id="htmNotes_TD_T1_DXI10_II" style={{height: '23px'}}>
                                                                                </li>
                                                                                <li title="Fore Color" className="dxm-item dxtb-cb dxm-dropDownMode dxm-noImage dxm-disabled" id="htmNotes_TD_T1_DXI11_" style={{}} savedcursor="pointer">
                                                                                  <div className="dxm-content dxm-disabled" id="htmNotes_TD_T1_DXI11_T">
                                                                                    <div title="Fore Color" className="dxtcbControl_Office2003Blue " id="htmNotes_TD_T1_ITTCNT11_forecolor">
                                                                                      <img id="htmNotes_TD_T1_ITTCNT11_forecolor_P" title="Fore Color" className="dxHtmlEditor_Icons_heForeColor_Office2003Blue dxHtmlEditor_Icons_heForeColorDisabled_Office2003Blue" src={DXR1} alt="Fore Color" saveddisabledstateitemsrc={DXR1} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heForeColor_Office2003Blue" />
                                                                                      <div id="htmNotes_TD_T1_ITTCNT11_forecolor_CD" className="dxtcbColorDiv_Office2003Blue" style={{backgroundColor: '#000000'}}>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div className="dxm-popOut dxm-disabled" id="htmNotes_TD_T1_DXI11_P">
                                                                                    <img className="dxHtmlEditor_heToolbarPopOut_Office2003Blue dxm-pImage" src={DXR1} alt="v" id="htmNotes_TD_T1_DXI11_PImg" />
                                                                                  </div>
                                                                                </li>
                                                                              </ul>
                                                                            </div>
                                                                            <b className="dx-clear" />
                                                                            <div id="htmNotes_TD_T1_DXM10_" style={{zIndex: 20000, display: 'none', position: 'absolute', visibility: 'hidden'}}>
                                                                              <div className="dxm-shadow dxm-popup dxmtb" id="htmNotes_TD_T1_DXME10_">
                                                                                <div className="dx">
                                                                                  <table className="dxeColorTable_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_TD_T1_MTCNT10_backcolor" border={0} style={{borderStyle: 'None', borderCollapse: 'separate'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td className="dx">
                                                                                          <table id="htmNotes_TD_T1_MTCNT10_backcolor_CT" cellSpacing={0} cellPadding={0} onclick="aspxCClick('htmNotes_TD_T1_MTCNT10_backcolor', event)" border={0} style={{borderCollapse: 'separate'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C0">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C1">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 51, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C2">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 51, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C3">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 51, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C4">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 51, 102)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C5">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 0, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C6">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 51, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C7">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 51, 51)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C8">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 0, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C9">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 102, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C10">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 128, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C11">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 128, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C12">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 128, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C13">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 0, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C14">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(102, 102, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C15">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 128, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C16">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 0, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C17">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 153, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C18">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 204, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C19">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 153, 102)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C20">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 204, 204)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C21">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 102, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C22">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 0, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C23">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 153, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C24">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 0, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C25">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 204, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C26">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 255, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C27">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 255, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C28">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 255, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C29">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 204, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C30">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 51, 102)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C31">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(192, 192, 192)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C32">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 153, 204)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C33">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 204, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C34">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 255, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C35">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(204, 255, 204)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C36">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(204, 255, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C37">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 204, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C38">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(204, 153, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className="dxeColorTableCell_Office2003Blue dxeColorTableCellSelected_Office2003Blue" id="htmNotes_TD_T1_MTCNT10_backcolor_C39">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div id="htmNotes_TD_T1_DXM11_" style={{zIndex: 20000, display: 'none', position: 'absolute', visibility: 'hidden'}}>
                                                                              <div className="dxm-shadow dxm-popup dxmtb" id="htmNotes_TD_T1_DXME11_">
                                                                                <div className="dx">
                                                                                  <table className="dxeColorTable_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_TD_T1_MTCNT11_forecolor" border={0} style={{borderStyle: 'None', borderCollapse: 'separate'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td className="dx">
                                                                                          <table id="htmNotes_TD_T1_MTCNT11_forecolor_CT" cellSpacing={0} cellPadding={0} onclick="aspxCClick('htmNotes_TD_T1_MTCNT11_forecolor', event)" border={0} style={{borderCollapse: 'separate'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td className="dxeColorTableCell_Office2003Blue dxeColorTableCellSelected_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C0">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C1">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 51, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C2">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 51, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C3">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 51, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C4">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 51, 102)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C5">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 0, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C6">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 51, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C7">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 51, 51)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C8">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 0, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C9">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 102, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C10">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 128, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C11">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 128, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C12">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 128, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C13">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 0, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C14">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(102, 102, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C15">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 128, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C16">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 0, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C17">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 153, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C18">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 204, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C19">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 153, 102)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C20">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 204, 204)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C21">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(51, 102, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C22">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(128, 0, 128)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C23">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 153, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C24">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 0, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C25">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 204, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C26">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 255, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C27">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 255, 0)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C28">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 255, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C29">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(0, 204, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C30">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 51, 102)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C31">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(192, 192, 192)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                              <tr>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C32">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 153, 204)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C33">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 204, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C34">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 255, 153)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C35">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(204, 255, 204)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C36">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(204, 255, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C37">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(153, 204, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C38">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(204, 153, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                                <td className=" dxeColorTableCell_Office2003Blue" id="htmNotes_TD_T1_MTCNT11_forecolor_C39">
                                                                                                  <div className=" dxeColorTableCellDiv_Office2003Blue" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                                                                                  </div>
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                </div>
                                                                              </div>
                                                                              <div className="dxmBrdCor_Office2003Blue" style={{display: 'none', zIndex: 20001, position: 'absolute'}} id="htmNotes_TD_T1_DXMBC10_">
                                                                              </div>
                                                                              <div className="dxmBrdCor_Office2003Blue" style={{display: 'none', zIndex: 20001, position: 'absolute'}} id="htmNotes_TD_T1_DXMBC11_">
                                                                              </div>
                                                                            </div>
                                                                          </div></td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td id="htmNotes_EdtCell" className="dxheContentArea_Office2003Blue " valign="top" style={{width: '100%', borderBottomStyle: 'none', paddingBottom: '0px'}}>
                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td id="htmNotes_DesignViewCell" className="dxheDesignViewArea_Office2003Blue dxheViewArea_Office2003Blue" valign="top" style={{borderColor: 'rgb(0, 45, 150)', height: '299px', width: '100%', borderBottomWidth: '0px'}}>
                                                                  <table id="htmNotes_DesignViewCell_EF" className="dxheErrorFrame_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="dxhe">
                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                                                                            <tbody>
                                                                              <tr>
                                                                                <td id="htmNotes_DesignViewCell_ETC" style={{width: '100%'}}>
                                                                                  The
                                                                                  HTML
                                                                                  content
                                                                                  is
                                                                                  invalid
                                                                                </td>
                                                                                <td style={{paddingLeft: '4px'}}>
                                                                                  <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td id="htmNotes_DesignViewCell_EFCB" className="dxheErrorFrameCloseButton_Office2003Blue" onclick="aspxHEEFCBClick(event, 'htmNotes')">
                                                                                          <img id="htmNotes_DesignViewCell_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_Office2003Blue" src={DXR1} alt="Close" />
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                  <iframe id="htmNotes_DesignIFrame" className="dxheDesignViewArea_Office2003Blue dxheViewArea_Office2003Blue" name="htmNotes_DesignIFrame" src="javascript:false" frameBorder={0} style={{borderColor: 'rgb(0, 45, 150)', height: '100%', width: '100%', padding: '0px', borderStyle: 'none', borderWidth: '0px'}}>
                                                                  </iframe>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                          <table className="dxeMemoSys dxeMemo_Office2003Blue dxheHtmlViewArea_Office2003Blue dxheViewArea_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_HtmlViewEdit" border={0} style={{borderColor: '#002D96', height: '100%', width: '100%', borderCollapse: 'separate', borderBottomWidth: '0px', display: 'none'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td valign="top" style={{width: '100%', padding: '0px'}}>
                                                                  <table id="htmNotes_HtmlViewEdit_EF" className="dxheErrorFrame_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="dxhe">
                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                                                                            <tbody>
                                                                              <tr>
                                                                                <td id="htmNotes_HtmlViewEdit_ETC" style={{width: '100%'}}>
                                                                                  The
                                                                                  HTML
                                                                                  content
                                                                                  is
                                                                                  invalid
                                                                                </td>
                                                                                <td style={{paddingLeft: '4px'}}>
                                                                                  <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td id="htmNotes_HtmlViewEdit_EFCB" className="dxheErrorFrameCloseButton_Office2003Blue" onclick="aspxHEEFCBClick(event, 'htmNotes')">
                                                                                          <img id="htmNotes_HtmlViewEdit_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_Office2003Blue" src={DXR1} alt="Close" />
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                  <table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td><textarea className="dxeMemoEditArea_Office2003Blue dxeMemoEditAreaSys" id="htmNotes_HtmlViewEdit_I" onchange="aspxHEHtmlViewHtmlChanged('htmNotes');" onkeydown="aspxEKeyDown('htmNotes_HtmlViewEdit', event)" cols rows style={{height: '0px', width: '100%', margin: '0px', overflowY: 'scroll', resize: 'none'}} defaultValue={""} />
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse', display: 'none'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td id="htmNotes_PreviewCell" className="dxhePreviewArea_Office2003Blue dxheViewArea_Office2003Blue" valign="top" style={{borderColor: 'rgb(0, 45, 150)', height: '0px', width: '100%', borderBottomWidth: '0px'}}>
                                                                  <table id="htmNotes_PreviewCell_EF" className="dxheErrorFrame_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="dxhe">
                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                                                                            <tbody>
                                                                              <tr>
                                                                                <td id="htmNotes_PreviewCell_ETC" style={{width: '100%'}}>
                                                                                  The
                                                                                  HTML
                                                                                  content
                                                                                  is
                                                                                  invalid
                                                                                </td>
                                                                                <td style={{paddingLeft: '4px'}}>
                                                                                  <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td id="htmNotes_PreviewCell_EFCB" className="dxheErrorFrameCloseButton_Office2003Blue" onclick="aspxHEEFCBClick(event, 'htmNotes')">
                                                                                          <img id="htmNotes_PreviewCell_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_Office2003Blue" src={DXR1} alt="Close" />
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                  <iframe id="htmNotes_PreviewIFrame" className="dxhePreviewArea_Office2003Blue dxheViewArea_Office2003Blue" name="htmNotes_PreviewIFrame" src="javascript:false" frameBorder={0} style={{borderColor: 'rgb(0, 45, 150)', height: '100%', width: '100%', padding: '0px', borderStyle: 'none', borderWidth: '0px'}}>
                                                                  </iframe>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td id="htmNotes_SBarCell">
                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td className="dxheStatusBar_Office2003Blue dxheContentArea_Office2003Blue" style={{width: '100%', paddingTop: '0px'}}>
                                                                  <input type="hidden" id="htmNotes_TCATI" name="htmNotes_TCATI" defaultValue={0} />
                                                                  <table className="dxtcControl_Office2003Blue" cellSpacing={0} cellPadding={0} id="htmNotes_TC" border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td id="htmNotes_TC_TC" className="dxtcTabsCellWithTabPositionBottom" style={{paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px', paddingBottom: '3px'}}>
                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'separate'}}>
                                                                            <tbody>
                                                                              <tr>
                                                                                <td className="dxtcLeftIndentCell_Office2003Blue" style={{width: '8px', borderTopColor: '#002D96', borderTopStyle: 'Solid', borderTopWidth: '1px'}}>
                                                                                  <div style={{height: '1px', width: '8px', overflow: 'hidden'}}>
                                                                                  </div>
                                                                                </td>
                                                                                <td style={{verticalAlign: 'top'}}>
                                                                                  <table className="dxtcActiveRow_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                    <tbody>
                                                                                      <tr>
                                                                                        <td id="htmNotes_TC_T0" className="dxtcTabWithTabPositionBottom_Office2003Blue dxheStatusBarTab_Office2003Blue" style={{height: '0px', borderTop: '1px solid rgb(0, 45, 150)', display: 'none', cursor: 'pointer'}} onclick="return aspxTCTClick(event, 'htmNotes_TC', 0)">
                                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="htmNotes_TC_T0T" className="dxtc" style={{width: '100%'}}>
                                                                                                  Design
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                        <td id="htmNotes_TC_AT0" className="dxtcActiveTabWithTabPositionBottom_Office2003Blue dxheStatusBarTab_Office2003Blue dxheStatusBarActiveTab_Office2003Blue" style={{height: '0px', borderTopWidth: '0px !important', cursor: 'default'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', marginTop: '1px'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="htmNotes_TC_AT0T" className="dxtc" style={{width: '100%'}}>
                                                                                                  Design
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                        <td id="htmNotes_TC_T0S" style={{width: '1px', borderTopColor: '#002D96', borderTopStyle: 'Solid', borderTopWidth: '1px'}}>
                                                                                          <div style={{height: '1px', width: '1px', overflow: 'hidden'}}>
                                                                                          </div>
                                                                                        </td>
                                                                                        <td id="htmNotes_TC_T1" className="dxtcTabWithTabPositionBottom_Office2003Blue dxheStatusBarTab_Office2003Blue" style={{height: '0px', borderTop: '1px solid rgb(0, 45, 150)', cursor: 'pointer'}} onclick="return aspxTCTClick(event, 'htmNotes_TC', 1)">
                                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="htmNotes_TC_T1T" className="dxtc" style={{width: '100%'}}>
                                                                                                  HTML
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                        <td id="htmNotes_TC_AT1" className="dxtcActiveTabWithTabPositionBottom_Office2003Blue dxheStatusBarTab_Office2003Blue dxheStatusBarActiveTab_Office2003Blue" style={{height: '0px', display: 'none', borderTopWidth: '0px !important', cursor: 'default'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', marginTop: '1px'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="htmNotes_TC_AT1T" className="dxtc" style={{width: '100%'}}>
                                                                                                  HTML
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                        <td id="htmNotes_TC_T1S" style={{width: '1px', borderTopColor: '#002D96', borderTopStyle: 'Solid', borderTopWidth: '1px'}}>
                                                                                          <div style={{height: '1px', width: '1px', overflow: 'hidden'}}>
                                                                                          </div>
                                                                                        </td>
                                                                                        <td id="htmNotes_TC_T2" className="dxtcTabWithTabPositionBottom_Office2003Blue dxheStatusBarTab_Office2003Blue" style={{height: '0px', borderTop: '1px solid rgb(0, 45, 150)', cursor: 'pointer'}} onclick="return aspxTCTClick(event, 'htmNotes_TC', 2)">
                                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="htmNotes_TC_T2T" className="dxtc" style={{width: '100%'}}>
                                                                                                  Preview
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                        <td id="htmNotes_TC_AT2" className="dxtcActiveTabWithTabPositionBottom_Office2003Blue dxheStatusBarTab_Office2003Blue dxheStatusBarActiveTab_Office2003Blue" style={{height: '0px', display: 'none', borderTopWidth: '0px !important', cursor: 'default'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', marginTop: '1px'}}>
                                                                                            <tbody>
                                                                                              <tr>
                                                                                                <td id="htmNotes_TC_AT2T" className="dxtc" style={{width: '100%'}}>
                                                                                                  Preview
                                                                                                </td>
                                                                                              </tr>
                                                                                            </tbody>
                                                                                          </table>
                                                                                        </td>
                                                                                      </tr>
                                                                                    </tbody>
                                                                                  </table>
                                                                                </td>
                                                                                <td id="htmNotes_TC_RAC" className="dxtcRightAlignCell_Office2003Blue" style={{width: '100%', borderTopColor: '#002D96', borderTopStyle: 'Solid', borderTopWidth: '1px'}}>
                                                                                  <div style={{height: '1px', width: '1px', overflow: 'hidden'}}>
                                                                                  </div>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table><input type="hidden" name="htmNotes_SVHtml" id="htmNotes_SVHtml" defaultValue />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <div id="htmNotes_DPP_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{width: '200px', cursor: 'default', zIndex: 10000, display: 'none'}}>
                                            <div className="dxpc-header dxpc-withBtn" style={{cursor: 'move', KhtmlUserSelect: 'none'}} id="htmNotes_DPP_PWH-1">
                                              <div className="dxpc-headerContent">
                                                <span className="dxpc-headerText" id="htmNotes_DPP_PWH-1T">Header</span>
                                              </div>
                                              <div className="dxpc-closeBtn" style={{cursor: 'pointer'}} id="htmNotes_DPP_HCB-1">
                                                <img className="dxWeb_pcCloseButton_Office2003Blue" src={DXR1} alt="[Close]" />
                                              </div><b className="dx-clear" />
                                            </div>
                                            <div className="dxpc-contentWrapper">
                                              <div className="dxpc-content" style={{paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px', paddingBottom: '0px'}} id="htmNotes_DPP_PWC-1">
                                                &nbsp;&nbsp;
                                              </div>
                                            </div>
                                          </div>
                                          <div id="htmNotes_DPP_DXPWMB-1" className="dxpcModalBackLite_Office2003Blue" style={{opacity: '0.01', zIndex: 9999}}>
                                          </div>
                                          <table id="htmNotes_DPP_LP" className="dxpcLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none'}}>
                                            <tbody>
                                              <tr>
                                                <td className="dx" style={{paddingRight: '8px'}}>
                                                  <img src="/DXR.axd?r=1_13-I60ci" alt="" align="middle" /></td>
                                                <td className="dx" style={{paddingLeft: '0px'}}>
                                                  <span id="htmNotes_DPP_TL">Loading…</span>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <div id="htmNotes_DPP_LD" className="dxpcLoadingDiv_Office2003Blue" style={{left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute'}}>
                                          </div>
                                          <div className="dxmLite_Office2003Blue dxm-ltr">
                                            <div id="htmNotes_PPM" style={{zIndex: 19998, display: 'none', position: 'absolute'}}>
                                              <div className="dxm-popupMain dxm-shadow dxm-popup" id="htmNotes_PPM_DXME_">
                                                <ul className="dx dxm-noImages">
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI0_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI0_T">
                                                      Cut
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI0_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI1_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI1_T">
                                                      Copy
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI1_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI2_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI2_T">
                                                      Paste
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI2_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI3_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI3_T">
                                                      Select All
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-separator" id="htmNotes_PPM_DXI4_IS">
                                                    <b /></li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI4_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI4_T">
                                                      Change Link...
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-separator" id="htmNotes_PPM_DXI5_IS">
                                                    <b /></li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI5_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI5_T">
                                                      Change Image...
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-separator" id="htmNotes_PPM_DXI6_IS">
                                                    <b /></li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI6_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI6_T">
                                                      Table
                                                      Properties...
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI6_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI7_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI7_T">
                                                      Row
                                                      Properties...
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI7_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI8_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI8_T">
                                                      Column
                                                      Properties...
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI8_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI9_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI9_T">
                                                      Cell
                                                      Properties...
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-separator" id="htmNotes_PPM_DXI10_IS">
                                                    <b /></li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI10_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI10_T">
                                                      Insert Row Above
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI10_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI11_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI11_T">
                                                      Insert Row Below
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI11_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI12_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI12_T">
                                                      Insert Column to
                                                      the Left
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI12_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI13_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI13_T">
                                                      Insert Column to
                                                      the Right
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-separator" id="htmNotes_PPM_DXI14_IS">
                                                    <b /></li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI14_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI14_T">
                                                      Split
                                                      Horizontally
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI14_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI15_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI15_T">
                                                      Split Vertically
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI15_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI16_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI16_T">
                                                      Merge Right
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI16_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI17_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI17_T">
                                                      Merge Down
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-separator" id="htmNotes_PPM_DXI18_IS">
                                                    <b /></li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI18_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI18_T">
                                                      Delete Table
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI18_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI19_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI19_T">
                                                      Delete Row
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                  <li className="dxm-spacing" id="htmNotes_PPM_DXI19_II">
                                                  </li>
                                                  <li className="dxm-item" id="htmNotes_PPM_DXI20_" style={{cursor: 'pointer'}}>
                                                    <div className="dxm-content dxm-hasText" id="htmNotes_PPM_DXI20_T">
                                                      Delete Column
                                                    </div><b className="dx-clear" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <table id="htmNotes_EF" className="dxheErrorFrame_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                                            <tbody>
                                              <tr>
                                                <td className="dxhe">
                                                  <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                                                    <tbody>
                                                      <tr>
                                                        <td id="htmNotes_ETC" style={{width: '100%'}}>
                                                          The HTML
                                                          content
                                                          is
                                                          invalid
                                                        </td>
                                                        <td style={{paddingLeft: '4px'}}>
                                                          <table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                            <tbody>
                                                              <tr>
                                                                <td id="htmNotes_EFCB" className="dxheErrorFrameCloseButton_Office2003Blue" onclick="aspxHEEFCBClick(event, 'htmNotes')">
                                                                  <img id="htmNotes_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_Office2003Blue" src={DXR1} alt="Close" />
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table><input type="hidden" name="ctl00$MainContent$htmNotes$ClientState" id="htmNotes_ClientState" defaultValue="ActiveView|6|DesignCurrentWidth|3|689CurrentHeight|3|400IsPercentWidth|1|0" /><input type="hidden" name="ctl00$MainContent$htmNotes$CssFiles" id="htmNotes_CssFiles" defaultValue="['/DXR.axd?r=0_1398-I60ci']" />
                                          <input type="hidden" name="htmNotes_Html" id="htmNotes_Html" defaultValue /><input type="hidden" name="htmNotes_VS" id="htmNotes_VS" defaultValue />
                                        </div>
                                        <table id="htmNotes_LP" className="dxheLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none'}}>
                                          <tbody>
                                            <tr>
                                              <td className="dx" style={{paddingRight: '8px'}}>
                                                <img src="/DXR.axd?r=0_1394-I60ci" alt="" align="middle" />
                                              </td>
                                              <td className="dx" style={{paddingLeft: '0px'}}>
                                                <span id="htmNotes_TL">Loading…</span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <div id="htmNotes_LD" className="dxheLoadingDiv_Office2003Blue" style={{left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute'}}>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr style={{paddingTop: '10px', display: 'flex'}}>
                                      <td style={{width: '100%', border: '1px solid #AECAF0', backgroundColor: '#fff'}}>
                                        <input type="submit" name="ctl00$MainContent$bnOk" defaultValue="Update" id="bnOk" className="save" />
                                        <input type="submit" name="ctl00$MainContent$bnCancel" defaultValue="Cancel" id="bnCancel" className="cancel" />
                                        <span id="lblMsg" style={{color: 'Red'}} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <table>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <table>
                                                  <tbody>
                                                    <tr>
                                                      <td className="dxtcLeftIndentCell_Aqua" style={{width: '5px', borderBottomColor: '#AECAF0', borderBottomStyle: 'Solid', borderBottomWidth: '1px'}}>
                                                        <div style={{height: '1px', width: '5px', overflow: 'hidden'}}>
                                                        </div>
                                                      </td>
                                                      <td className="dxtcActiveTab_Aqua" style={{height: '0px', cursor: 'default', borderBottomWidth: '0px!important', fontSize: '22px', whiteSpace: 'nowrap'}}>
                                                        Call History
                                                      </td>
                                                      <td id="tabTicket_RAC" className="dxtcRightAlignCell_Aqua" style={{width: '100%', borderBottomColor: '#AECAF0', borderBottomStyle: 'Solid', borderBottomWidth: '1px'}}>
                                                        <div style={{height: '1px', width: '1px', overflow: 'hidden'}}>
                                                        </div>
                                                      </td>
                                                      <td className="dxtcLeftIndentCell_Aqua" style={{width: '5px', borderBottomColor: '#AECAF0', borderBottomStyle: 'Solid', borderBottomWidth: '1px'}}>
                                                        <div style={{height: '1px', width: '5px', overflow: 'hidden'}}>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="dxtcPageContent_Aqua" style={{borderColor: '#AECAF0', borderWidth: '1px', borderStyle: 'Solid', fontFamily: 'Calibri', fontSize: 'Medium', fontWeight: 'bold', width: '100%', borderTopWidth: '0px', paddingLeft: '11px', paddingRight: '11px', paddingTop: '11px', paddingBottom: '11px'}}>
                                                <table>
                                                  <tbody><tr id="Grid_DXHeadersRow0">
                                                      <td id="Grid_col1" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Grid', this, event);" style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center', borderTopWidth: '0px', borderLeftWidth: '0px'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                          <tbody><tr>
                                                              <td style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center'}}>First Name</td>
                                                            </tr>
                                                          </tbody></table></td><td id="Grid_col2" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Grid', this, event);" style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center', borderTopWidth: '0px', borderLeftWidth: '0px'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                          <tbody><tr>
                                                              <td style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center'}}>Email</td>
                                                            </tr>
                                                          </tbody></table></td><td id="Grid_col3" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Grid', this, event);" style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center', borderTopWidth: '0px', borderLeftWidth: '0px'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                          <tbody><tr>
                                                              <td style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center'}}>Star Time</td>
                                                            </tr>
                                                          </tbody></table></td><td id="Grid_col4" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Grid', this, event);" style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center', borderTopWidth: '0px', borderLeftWidth: '0px'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                          <tbody><tr>
                                                              <td style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center'}}>End Time</td>
                                                            </tr>
                                                          </tbody></table></td><td id="Grid_col5" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Grid', this, event);" style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center', borderTopWidth: '0px', borderLeftWidth: '0px'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                          <tbody><tr>
                                                              <td style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center'}}>FollowUpdate</td>
                                                            </tr>
                                                          </tbody></table></td><td id="Grid_col6" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Grid', this, event);" style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center', borderTopWidth: '0px', borderLeftWidth: '0px'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                          <tbody><tr>
                                                              <td style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center'}}>Remainder Time</td>
                                                            </tr>
                                                          </tbody></table></td><td id="Grid_col7" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Grid', this, event);" style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center', borderTopWidth: '0px', borderLeftWidth: '0px', borderRightWidth: '0px'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                          <tbody><tr>
                                                              <td style={{fontFamily: 'Calibri', fontSize: 'Small', fontWeight: 'bold', textAlign: 'Center'}}>CallStatus</td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr><tr className="dxgvEmptyDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: '12px'}}>
                                                      <td className="dxgv" colSpan={7} style={{borderBottomWidth: '0px', textAlign: 'center'}}><div>
                                                          No data to display
                                                        </div></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='free-space'></div>
      <Footer />
    </div>
    )
  }
}

export default Openticketsedit