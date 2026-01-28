import Translatable from "components/translatable/Translatable";
import propertyList from "landingpage/compo/market/propertyList"
import { useEffect, useState } from "react"
import { 
  Container, Row, Col, Card, Button, Form, 
  Badge, Alert, ProgressBar, Modal,
  Tab, Nav, ListGroup, Accordion
} from 'react-bootstrap';

import { useParams } from "react-router-dom"
// Types
interface TimeSlot {
  id: string;
  startDate: string;
  endDate: string;
  price: number;
  isAvailable: boolean;
  tokenId?: string;
}

interface PropertyUnit {
  id: string;
  title: string;
  location: string;
  description: string;
  cover: string;
  totalTimeSlots: number;
  availableSlots: number;
  pricePerSlot: number;
  regulatoryStatus: string;
  tokenized: boolean;
  timeSlots: TimeSlot[];
  ownerWallet: string;
  deedNumber?: string;
}


interface Transaction {
  id: string;
  propertyId: string;
  timeSlotId: string;
  buyerWallet: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  deedIssued: boolean;
  timestamp: string;
}

export default function PropDetails() {

  const propId = useParams()?.id
  const propertiesData = propertyList()
  const propById =  propertiesData?.find((item) => item.id === propId)

  const [selectedProperty, setSelectedProperty] = useState<PropertyUnit | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [userWallet, setUserWallet] = useState<string>('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showDeedModal, setShowDeedModal] = useState(false);
  const [activeTab, setActiveTab] = useState<any>('browse');

  console.log(activeTab)

  useEffect(() => {
    if (!propById) {
      setSelectedProperty(null);
      return;
    }
    setSelectedProperty(propById);
  }, [])

  const initiatePurchase = async (propertyId: string, timeSlotId: string): Promise<void> => {
    // Smart contract call for purchase
    const newTransaction: Transaction = {
      id: `tx-${Date.now()}`,
      propertyId,
      timeSlotId,
      buyerWallet: userWallet,
      amount: selectedTimeSlot?.price || 0,
      status: 'pending',
      deedIssued: false,
      timestamp: new Date().toISOString()
    };
    
    setTransactions([...transactions, newTransaction]);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setTransactions(prev => 
        prev.map(tx => 
          tx.id === newTransaction.id 
            ? { ...tx, status: 'completed', deedIssued: true } 
            : tx
        )
      );
    }, 3000);
  };

  const handleClickCard = (slot: any) => {
    setSelectedTimeSlot(slot)
    setUserWallet(slot?.id)
  }

  const TimeSlotSelector: React.FC<{ slots: TimeSlot[] }> = ({ slots }) => (
    <>
    <style>
    {`
      .bg-dark {
        background: linear-gradient(135deg,rgb(50, 62, 61) 0%,rgb(1, 52, 51) 100%);
      }

      .gradient-border {
        position: relative;
        background: linear-gradient(135deg, #0a0e17, #131b2d);
        border: 1px solid transparent;
        border-radius: 12px;
      }

      .gradient-border::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #00d4ff, #0066ff, #9d4edd);
        border-radius: 14px;
        z-index: -1;
        opacity: 0.7;
      }

      .hover-lift {
        transition: all 0.3s ease;
      }

      .hover-lift:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 212, 255, 0.15);
      }

      .dashed-line {
        width: 40px;
        height: 1px;
        background: repeating-linear-gradient(
          to right,
          #00d4ff 0px,
          #00d4ff 5px,
          transparent 5px,
          transparent 10px
        );
      }

      .pulse-indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(0, 212, 255, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(0, 212, 255, 0);
        }
      }

      .tracking-wide {
        letter-spacing: 0.1em;
      }

      .tracking-tight {
        letter-spacing: -0.025em;
      }
    `}
    </style>
    <div className="time-slots-container">
      <h6 className="mb-3 text-uppercase fw-semibold tracking-tight"><Translatable text="Available periods"/></h6>
      <Row className="g-3">
        {slots.map((slot) => (
          <Col key={slot?.id} xs={12} md={6} lg={6} className="d-flex">
            <Card 
              className={`h-100 w-100 cursor-pointer border-0 rounded-3 overflow-hidden ${selectedTimeSlot?.id === slot.id ? 'gradient-border' : 'bg-dark'} transition-all hover-lift`}
              onClick={() => slot.isAvailable && handleClickCard(slot)}
            >
              {/* Token Header */}
              <div className="bg-dark bg-opacity-75 px-3 py-2 border-bottom border-secondary">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-lock text-info me-2 fs-xs"></i>
                    {/* <small className="text-light opacity-75 font-monospace"> #{slot.id?.toString().padStart(4, '0') || '0000'}</small> */}
                    <div className="bg-darkx d-flex justify-content-center align-items-center">
                    <small className="text-info text-uppercase fw-bold tracking-wide fs-xs mb-2 d-block">
                      <i className="bi bi-fingerprint me-1"></i> HASH TOKEN
                    </small>
                    <div className="font-monospace text-light opacity-75 fs-xs flex-grow-1 text-truncate mx-2">
                      {slot.tokenId ? slot.tokenId : '0X' + Array.from({length: 10}, () => Math.floor(Math.random() * 16).toString(16)).join('').toLocaleUpperCase()}
                    </div>
                  </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className={`pulse-indicator me-2 ${slot.isAvailable ? 'bg-success' : 'bg-secondary'}`}></div>
                    <span className={`fw-bold ${slot.isAvailable ? 'text-success' : 'text-secondary'}`}>
                      {slot.isAvailable ? <Translatable text="AVAILABLE"/> : <Translatable text="BOOKED"/>}
                    </span>
                  </div>
                </div>
              </div>
              
              <Card.Body className="p-4 d-flex flex-column bg-darkx text-light">
                {/* Encrypted Date Display */}
                <div className="mb-4">
                  <div className="bg-darkx border border-secondary rounded-2 p-3 position-relative">
                    <div className="position-absolute top-0 start-0 px-2 bg-darkx text-info fs-xs" style={{transform: 'translateY(-50%)'}}>
                      VALIDITY PERIOD
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-centerx">
                        <small className="text-info opacity-75"><Translatable text="From"/></small>
                        <div className="font-monospace text-light fs-3x fw-bold">{new Date(slot.startDate).toLocaleDateString('ar-SA')}</div>
                      </div>
                      <div className="text-centerx">
                        <small className="text-info opacity-75"><Translatable text="To"/></small>
                        <div className="font-monospace text-light fs-5x fw-bold">{new Date(slot.endDate).toLocaleDateString('ar-SA')}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Token Value Section */}
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <small className="text-info text-uppercase fw-bold tracking-wide fs-xs">
                          <i className="bi bi-currency-exchange me-1"></i> SLOT VALUE
                        </small>
                      </div>
                      <div className="mx-2">
                        <span className="fs-3x fw-bold text-light">{slot.price.toLocaleString()}</span>
                        <span className="text-info ms-2 fw-semibold"><Translatable text="SAR"/></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Token Hash */}
                  {/* <div className="bg-dark d-flex justify-content-center align-items-center">
                    <small className="text-info text-uppercase fw-bold tracking-wide fs-xs mb-2 d-block">
                      <i className="bi bi-fingerprint me-1"></i> HASH TOKEN
                    </small>
                      <div className="font-monospace text-light opacity-75 fs-xs flex-grow-1 text-truncate">
                        {slot.tokenId ? slot.tokenId : '0X' + Array.from({length: 10}, () => Math.floor(Math.random() * 16).toString(16)).join('').toLocaleUpperCase()}
                    </div>
                  </div> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );

  const PropertyCard: React.FC<{ property: PropertyUnit }> = ({ property }) => (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <Badge bg={property.regulatoryStatus === 'approved' ? 'success' : 'warning'} className="mb-2">
              {property.regulatoryStatus === 'approved' ? <Translatable text="Approved"/> : <Translatable text="Under review"/>}
            </Badge>
            <Badge bg="info" className="ms-2">
              {property.tokenized ? <Translatable text="Digitally funded"/> : <Translatable text="Not funded"/>}
            </Badge>
          </div>
          <Badge bg="secondary">{property.availableSlots}/{property.totalTimeSlots} <Translatable text="Period"/></Badge>
        </div>

        <div className="tl-1-course-img">
          <img src={property.cover} alt="Course Image" />
          {/* <span className="tl-1-course-price">{item.pricePerSlot} SR</span> */}
          <div style={{ fontSize: '14px' }} className="tl-1-course-price d-flex align-items-center gap-2">
            <span className="">{property.pricePerSlot.toLocaleString()} SR</span>
            <small className="">Per slot</small>
          </div>
        </div>
        
        <Card.Title className="h5">{property.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          <i className="bi bi-geo-alt"></i> {property.location}
        </Card.Subtitle>
        
        <Card.Text className="text-truncate-2">{property.description}</Card.Text>
        
        {property.deedNumber && (
          <div className="mt-2">
            <small className="text-success">
              <i className="bi bi-file-check"></i> <Translatable text="Deed number:"/> {property.deedNumber}
            </small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
  
  const TransactionHistory: React.FC = () => (
    <Card>
      <Card.Header>
        <h5 className="mb-0"><Translatable text="Transaction history"/></h5>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {transactions.map((tx) => (
            <ListGroup.Item key={tx.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <Badge bg={tx.status === 'completed' ? 'success' : 'warning'} className="me-2">
                      {tx.status === 'completed' ? <Translatable text="Completed"/> : <Translatable text="In progress"/>}
                    </Badge>
                    <span><Translatable text="Transaction #"/>{tx.id}</span>
                  </div>
                  <small className="text-muted d-block">
                    {new Date(tx.timestamp).toLocaleString('ar-SA')}
                  </small>
                </div>
                
                <div className="text-end">
                  <div className="h6 mb-0">{tx.amount.toLocaleString()} <Translatable text="SAR"/></div>
                  {tx.deedIssued && (
                    <Button 
                      variant="link" 
                      size="sm" 
                      onClick={() => setShowDeedModal(true)}
                    >
                      <Translatable text="View digital deed"/>
                    </Button>
                  )}
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );

  const DigitalDeedViewer: React.FC = () => (
    <Modal show={showDeedModal} onHide={() => setShowDeedModal(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title><Translatable text="Approved digital deed"/></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="border-primary">
          <Card.Body className="text-centerx">
            <div className="mb-4">
              <i className="bi bi-award-fill text-success" style={{ fontSize: '3rem' }}></i>
            </div>
            
            <h4 className="text-primary"><Translatable text="Digital ownership certificate"/></h4>
            <p className="text-muted"><Translatable text="Issued by Saudi Real Estate Authority"/></p>
            
            <hr />
            
            <Row className="text-start">
              <Col md={6}>
                <p><strong><Translatable text="Deed number:"/></strong> deed-2024-{Date.now().toString().slice(-6)}</p>
                <p><strong><Translatable text="Owner name:"/></strong> {userWallet}</p>
                <p><strong><Translatable text="Property:"/></strong> {selectedProperty?.title}</p>
              </Col>
              <Col md={6}>
                <p><strong><Translatable text="Period:"/></strong> {selectedTimeSlot?.startDate} <Translatable text="to"/> {selectedTimeSlot?.endDate}</p>
                <p><strong><Translatable text="Purchase value:"/></strong> {selectedTimeSlot?.price.toLocaleString()} <Translatable text="SAR"/></p>
                <p><strong><Translatable text="Issue date:"/></strong> {new Date().toLocaleDateString('ar-SA')}</p>
              </Col>
            </Row>
            
            <div className="mt-4 p-3 bg-light rounded">
              <small className="text-muted">
                <i className="bi bi-shield-check"></i> <Translatable text="This transaction has been documented on the blockchain and matched with the Real Estate Authority records"/>
              </small>
            </div>
            
            <div className="mt-4">
              <Badge bg="success" className="me-2">
                <i className="bi bi-check-circle"></i> <Translatable text="Digitally certified"/>
              </Badge>
              <Badge bg="info" className="me-2">
                <i className="bi bi-blockchain"></i> <Translatable text="Registered on blockchain"/>
              </Badge>
              <Badge bg="primary">
                <i className="bi bi-building"></i> <Translatable text="Approved by Real Estate Authority"/>
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );

  return (
    
    <section className=" tl-1-services pt-60 pb-120">
      <Container fluid className="container py-4 ">
        {/* Header */}
        <Row className="mb-4 mt-100">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="h3 mb-1"><Translatable text="Time-based real estate ownership platform"/></h1>
                <p className="text-muted mb-0">
                  <i className="bi bi-shield-check text-success"></i> <Translatable text="Certified by Saudi Real Estate Authority"/>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Navigation Tabs */}
        <Row className="mb-4">
          <Col>
            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Nav variant="tabs" className="mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="browse"><Translatable text="Browse properties"/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="myAssets"><Translatable text="My digital assets"/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="transactions"><Translatable text="Transactions"/></Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
          </Col>
        </Row>

        {/* Main Content */}
        <Row>
          {/* Property Listings */}
          <Col lg={4}>
            {activeTab === 'browse' && (
              <Row>
                <Col lg={selectedProperty ? 12 : 6} md={6} className="mb-4">
                  {propById && <PropertyCard property={propById} />}
                </Col>
              </Row>
            )}
            
            {activeTab === 'transactions' && <TransactionHistory />}
          </Col>

          {/* Property Details Sidebar */}
          {selectedProperty && activeTab === 'browse' && (
            <Col lg={8}>
              <Card>
                <Card.Header className="bg-primary text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{selectedProperty.title}</h5>
                  </div>
                </Card.Header>
                
                <Card.Body>
                  <Alert variant="info" className="d-flex align-items-center">
                    <i className="bi bi-info-circle-fill me-2"></i>
                    <small>
                      <Translatable text="This property is documented on the blockchain system and carries a digital deed approved by the Real Estate Authority"/>
                    </small>
                  </Alert>
                  
                  <div className="mb-4">
                    <h6><Translatable text="Ownership details"/></h6>
                    <Row>
                      <Col md={6}>
                        <p><strong><Translatable text="Location:"/></strong> {selectedProperty.location}</p>
                        <p><strong><Translatable text="Regulatory status:"/></strong> 
                          <Badge bg={selectedProperty.regulatoryStatus === 'approved' ? 'success' : 'warning'} className="ms-2">
                            {selectedProperty.regulatoryStatus === 'approved' ? <Translatable text="Approved"/> : <Translatable text="Under review"/>}
                          </Badge>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p><strong><Translatable text="Total number of periods:"/></strong> {selectedProperty.totalTimeSlots}</p>
                        <p><strong><Translatable text="Available periods:"/></strong> {selectedProperty.availableSlots}</p>
                      </Col>
                    </Row>
                    
                    <ProgressBar 
                      now={(selectedProperty.availableSlots / selectedProperty.totalTimeSlots) * 100}
                      label={`${Math.round((selectedProperty.availableSlots / selectedProperty.totalTimeSlots) * 100)}% Available`}
                      className="mt-2"
                    />
                  </div>
                  
                  <TimeSlotSelector slots={selectedProperty.timeSlots} />
                  
                  {selectedTimeSlot && (
                    <div className="mt-4 p-3 bg-light rounded">
                      <h6><Translatable text="Booking details"/></h6>
                      <Row>
                        <Col md={6}>
                          <p><strong><Translatable text="Selected period:"/></strong></p>
                          <p>
                            <Translatable text="From"/> {new Date(selectedTimeSlot.startDate).toLocaleDateString('ar-SA')}<br/>
                            <Translatable text="To"/> {new Date(selectedTimeSlot.endDate).toLocaleDateString('ar-SA')}
                          </p>
                        </Col>
                        <Col md={6} className="text-end">
                          <h4 className="text-primary">{selectedTimeSlot.price.toLocaleString()} <Translatable text="SAR"/></h4>
                          <Button 
                            variant="primary" 
                            className="mt-2"
                            onClick={() => setShowBookingModal(true)}
                            disabled={!userWallet}
                          >
                            <Translatable text="Confirm purchase"/>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  )}
                  
                  {selectedProperty.deedNumber && (
                    <div className="mt-3">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <i className="bi bi-file-text me-2"></i>
                            <Translatable text="Regulatory and property details"/>
                          </Accordion.Header>
                          <Accordion.Body>
                            <small>
                              <p><strong><Translatable text="Deed number:"/></strong> {selectedProperty.deedNumber}</p>
                              <p><strong><Translatable text="Tokenized ID:"/></strong> {selectedProperty.ownerWallet}</p>
                              <p><strong><Translatable text="Registration date:"/></strong> 2024-01-15</p>
                              <p><strong><Translatable text="Property status:"/></strong> <Translatable text="Clear and vacant"/></p>
                            </small>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        {/* Booking Modal */}
        <Modal show={showBookingModal} onHide={() => setShowBookingModal(false)}>

          <Modal.Header closeButton>
            <Modal.Title><Translatable text="Confirm purchase process"/></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mb-4">
              <i className="bi bi-safe2-fill text-primary" style={{ fontSize: '3rem' }}></i>
            </div>
            
            <h6 className="text-center mb-3"><Translatable text="Transaction details"/></h6>
            
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span><Translatable text="Property:"/></span>
                <span>{selectedProperty?.title}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span><Translatable text="Period:"/></span>
                <span>{selectedTimeSlot?.startDate} - {selectedTimeSlot?.endDate}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span><Translatable text="Amount:"/></span>
                <span className="h5 text-primary">{selectedTimeSlot?.price.toLocaleString()} <Translatable text="SAR"/></span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span><Translatable text="Service fees:"/></span>
                <span>{(selectedTimeSlot?.price || 0 * 0.02).toLocaleString()} <Translatable text="SAR"/></span>
              </ListGroup.Item>
            </ListGroup>
            
            <div className="mt-4">
              <Form.Check 
                type="checkbox"
                label={<Translatable text="I agree to the terms, conditions, and regulations applied by the Real Estate Authority"/>}
                id="terms-agreement"
                className="mb-3"
              />
              
              <Form.Check 
                type="checkbox"
                label={<Translatable text="I agree to issue an approved digital ownership deed"/>}
                id="deed-agreement"
              />
            </div>
            
            <Alert variant="warning" className="mt-3">
              <i className="bi bi-exclamation-triangle me-2"></i>
              <Translatable text="This transaction will be executed through smart contracts and the deed will be digitally registered in the Real Estate Authority records"/>
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowBookingModal(false)}>
              <Translatable text="Cancel"/>
            </Button>
            <Button 
              variant="primary" 
              onClick={() => {
                initiatePurchase(selectedProperty?.id || '', selectedTimeSlot?.id || '');
                setShowBookingModal(false);
                setActiveTab('transactions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Translatable text="Confirm purchase and authentication"/>
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Digital Deed Viewer */}
        <DigitalDeedViewer />

        {/* Technology Indicators Footer */}
        <Row className="mt-5 pt-4 border-top">
          <Col>
            <div className="text-center">
              <h6 className="text-muted mb-3"><Translatable text="Platform's approved technologies"/></h6>
              <div className="d-flex justify-content-center gap-4">
                <div className="text-center">
                  <i className="bi bi-shield-check text-success" style={{ fontSize: '2rem' }}></i>
                  <p className="small mt-1"><Translatable text="Digital authentication"/></p>
                </div>
                <div className="text-center">
                  <i className="bi bi-cpu-fill text-primary" style={{ fontSize: '2rem' }}></i>
                  <p className="small mt-1"><Translatable text="Smart contracts"/></p>
                </div>
                <div className="text-center">
                  <i className="bi bi-lock-fill text-info" style={{ fontSize: '2rem' }}></i>
                  <p className="small mt-1"><Translatable text="Secure transactions"/></p>
                </div>
                <div className="text-center">
                  <i className="bi bi-building text-warning" style={{ fontSize: '2rem' }}></i>
                  <p className="small mt-1"><Translatable text="Regulatory compliance"/></p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
}