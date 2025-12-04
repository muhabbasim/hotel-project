import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Button, Form, 
  Badge, Alert, ProgressBar, Modal,
  Tab, Nav, ListGroup, Accordion
} from 'react-bootstrap';

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
  totalTimeSlots: number;
  availableSlots: number;
  pricePerSlot: number;
  regulatoryStatus: 'approved' | 'pending' | 'rejected';
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

const TimesharePlatform: React.FC = () => {
  // State Management
  const [properties, setProperties] = useState<PropertyUnit[]>([
    {
      id: 'prop-001',
      title: 'Luxury Villa - Jeddah Corniche',
      location: 'Jeddah, Saudi Arabia',
      description: 'Premium beachfront villa with 5 bedrooms, private pool',
      totalTimeSlots: 52,
      availableSlots: 24,
      pricePerSlot: 8500,
      regulatoryStatus: 'approved',
      tokenized: true,
      ownerWallet: '0x742d35Cc6634C0532925a3b844Bc9e',
      deedNumber: 'صك-2024-001',
      timeSlots: generateTimeSlots()
    }
  ]);

  const [selectedProperty, setSelectedProperty] = useState<PropertyUnit | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [userWallet, setUserWallet] = useState<string>('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showDeedModal, setShowDeedModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'browse' | 'myAssets' | 'transactions'>('browse');

  // Generate sample time slots
  function generateTimeSlots(): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const startDate = new Date('2024-01-01');
    
    for (let i = 0; i < 12; i++) {
      const start = new Date(startDate);
      start.setMonth(start.getMonth() + i);
      const end = new Date(start);
      end.setDate(end.getDate() + 7);
      
      slots.push({
        id: `slot-${i}`,
        startDate: start.toISOString().split('T')[0],
        endDate: end.toISOString().split('T')[0],
        price: 8500 + (i * 500),
        isAvailable: i % 3 !== 0,
        tokenId: i % 3 !== 0 ? `token-${i}` : undefined
      });
    }
    return slots;
  }

  // Smart Contract Integration Functions
  const verifyOwnership = async (propertyId: string, walletAddress: string): Promise<boolean> => {
    // Integration with blockchain smart contract
    return true;
  };

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

  const issueDigitalDeed = async (transactionId: string): Promise<string> => {
    // Integration with Real Estate Authority API
    return `صك رقم ${Date.now()} صادر من الهيئة العقارية`;
  };

  // UI Components
  const PropertyCard: React.FC<{ property: PropertyUnit }> = ({ property }) => (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <Badge bg={property.regulatoryStatus === 'approved' ? 'success' : 'warning'} className="mb-2">
              {property.regulatoryStatus === 'approved' ? 'معتمد' : 'قيد المراجعة'}
            </Badge>
            <Badge bg="info" className="ms-2">
              {property.tokenized ? 'ممول رقمياً' : 'غير ممول'}
            </Badge>
          </div>
          <Badge bg="secondary">{property.availableSlots}/{property.totalTimeSlots} فترة</Badge>
        </div>
        
        <Card.Title className="h5">{property.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          <i className="bi bi-geo-alt"></i> {property.location}
        </Card.Subtitle>
        
        <Card.Text className="text-truncate-2">{property.description}</Card.Text>
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <h5 className="text-primary">{property.pricePerSlot.toLocaleString()} ر.س</h5>
            <small className="text-muted">للأسبوع</small>
          </div>
          
          <Button 
            variant="outline-primary" 
            size="sm"
            onClick={() => setSelectedProperty(property)}
          >
            عرض التفاصيل
          </Button>
        </div>
        
        {property.deedNumber && (
          <div className="mt-2">
            <small className="text-success">
              <i className="bi bi-file-check"></i> رقم الصك: {property.deedNumber}
            </small>
          </div>
        )}
      </Card.Body>
    </Card>
  );

  const TimeSlotSelector: React.FC<{ slots: TimeSlot[] }> = ({ slots }) => (
    <div className="time-slots-container">
      <h6 className="mb-3">الفترات المتاحة</h6>
      <Row>
        {slots.map((slot) => (
          <Col md={4} key={slot.id} className="mb-3">
            <Card 
              className={`h-100 cursor-pointer ${selectedTimeSlot?.id === slot.id ? 'border-primary' : ''}`}
              onClick={() => slot.isAvailable && setSelectedTimeSlot(slot)}
            >
              <Card.Body className={!slot.isAvailable ? 'bg-light' : ''}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <small className="d-block text-muted">من</small>
                    <strong>{new Date(slot.startDate).toLocaleDateString('ar-SA')}</strong>
                  </div>
                  <i className="bi bi-arrow-right"></i>
                  <div>
                    <small className="d-block text-muted">إلى</small>
                    <strong>{new Date(slot.endDate).toLocaleDateString('ar-SA')}</strong>
                  </div>
                </div>
                
                <div className="mt-2 d-flex justify-content-between align-items-center">
                  <span className="h6 mb-0">{slot.price.toLocaleString()} ر.س</span>
                  {slot.isAvailable ? (
                    <Badge bg="success">متاح</Badge>
                  ) : (
                    <Badge bg="secondary">محجوز</Badge>
                  )}
                </div>
                
                {slot.tokenId && (
                  <div className="mt-2">
                    <small className="text-info">
                      <i className="bi bi-hash"></i> {slot.tokenId.substring(0, 10)}...
                    </small>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const TransactionHistory: React.FC = () => (
    <Card>
      <Card.Header>
        <h5 className="mb-0">سجل المعاملات</h5>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {transactions.map((tx) => (
            <ListGroup.Item key={tx.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <Badge bg={tx.status === 'completed' ? 'success' : 'warning'} className="me-2">
                      {tx.status === 'completed' ? 'مكتمل' : 'قيد التنفيذ'}
                    </Badge>
                    <span>معاملة #{tx.id}</span>
                  </div>
                  <small className="text-muted d-block">
                    {new Date(tx.timestamp).toLocaleString('ar-SA')}
                  </small>
                </div>
                
                <div className="text-end">
                  <div className="h6 mb-0">{tx.amount.toLocaleString()} ر.س</div>
                  {tx.deedIssued && (
                    <Button 
                      variant="link" 
                      size="sm" 
                      onClick={() => setShowDeedModal(true)}
                    >
                      عرض الصك الرقمي
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
        <Modal.Title>الصك الرقمي المعتمد</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="border-primary">
          <Card.Body className="text-center">
            <div className="mb-4">
              <i className="bi bi-award-fill text-success" style={{ fontSize: '3rem' }}></i>
            </div>
            
            <h4 className="text-primary">شهادة الملكية الرقمية</h4>
            <p className="text-muted">الصادرة من الهيئة العقارية السعودية</p>
            
            <hr />
            
            <Row className="text-start">
              <Col md={6}>
                <p><strong>رقم الصك:</strong> صك-2024-{Date.now().toString().slice(-6)}</p>
                <p><strong>اسم المالك:</strong> {userWallet}</p>
                <p><strong>العقار:</strong> {selectedProperty?.title}</p>
              </Col>
              <Col md={6}>
                <p><strong>الفترة:</strong> {selectedTimeSlot?.startDate} إلى {selectedTimeSlot?.endDate}</p>
                <p><strong>قيمة الشراء:</strong> {selectedTimeSlot?.price.toLocaleString()} ر.س</p>
                <p><strong>تاريخ الإصدار:</strong> {new Date().toLocaleDateString('ar-SA')}</p>
              </Col>
            </Row>
            
            <div className="mt-4 p-3 bg-light rounded">
              <small className="text-muted">
                <i className="bi bi-shield-check"></i> تم توثيق هذه المعاملة على سلسلة الكتل 
                ومطابقتها مع سجلات الهيئة العقارية
              </small>
            </div>
            
            <div className="mt-4">
              <Badge bg="success" className="me-2">
                <i className="bi bi-check-circle"></i> موثق رقمياً
              </Badge>
              <Badge bg="info" className="me-2">
                <i className="bi bi-blockchain"></i> مسجل على البلوك تشين
              </Badge>
              <Badge bg="primary">
                <i className="bi bi-building"></i> معتمد من الهيئة العقارية
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );

  return (
    <Container fluid className="py-4">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 mb-1">منصة التمليك العقاري الزمني</h1>
              <p className="text-muted mb-0">
                <i className="bi bi-shield-check text-success"></i> معتمدة من الهيئة العقارية السعودية
              </p>
            </div>
            
            <div className="text-end">
              <div className="input-group" style={{ maxWidth: '400px' }}>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="أدخل عنوان المحفظة الرقمية"
                  value={userWallet}
                  onChange={(e) => setUserWallet(e.target.value)}
                />
                <Button variant="primary">ربط المحفظة</Button>
              </div>
              <small className="text-muted">
                <i className="bi bi-info-circle"></i> يتم ربط محفظة رقمية واحدة فقط
              </small>
            </div>
          </div>
        </Col>
      </Row>

      {/* Navigation Tabs */}
      <Row className="mb-4">
        <Col>
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k as any)}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="browse">تصفح العقارات</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="myAssets">أصولي الرقمية</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="transactions">المعاملات</Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </Col>
      </Row>

      {/* Main Content */}
      <Row>
        {/* Property Listings */}
        <Col lg={selectedProperty ? 7 : 12}>
          {activeTab === 'browse' && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>العقارات المتاحة</h4>
                <div className="d-flex gap-2">
                  <Form.Select style={{ width: '200px' }}>
                    <option>الرياض</option>
                    <option>جدة</option>
                    <option>الدمام</option>
                  </Form.Select>
                  <Form.Select style={{ width: '200px' }}>
                    <option>الأسعار من الأقل للأعلى</option>
                    <option>الأسعار من الأعلى للأقل</option>
                  </Form.Select>
                </div>
              </div>
              
              <Row>
                {properties.map((property) => (
                  <Col lg={selectedProperty ? 12 : 6} md={6} key={property.id} className="mb-4">
                    <PropertyCard property={property} />
                  </Col>
                ))}
              </Row>
            </>
          )}
          
          {activeTab === 'transactions' && <TransactionHistory />}
        </Col>

        {/* Property Details Sidebar */}
        {selectedProperty && activeTab === 'browse' && (
          <Col lg={5}>
            <Card className="sticky-top" style={{ top: '20px' }}>
              <Card.Header className="bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{selectedProperty.title}</h5>
                  <Button 
                    variant="light" 
                    size="sm"
                    onClick={() => setSelectedProperty(null)}
                  >
                    <i className="bi bi-x"></i>
                  </Button>
                </div>
              </Card.Header>
              
              <Card.Body>
                <Alert variant="info" className="d-flex align-items-center">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  <small>
                    تم توثيق هذا العقار بنظام البلوك تشين ويحمل صك رقمي معتمد من الهيئة العقارية
                  </small>
                </Alert>
                
                <div className="mb-4">
                  <h6>تفاصيل التمليك</h6>
                  <Row>
                    <Col md={6}>
                      <p><strong>الموقع:</strong> {selectedProperty.location}</p>
                      <p><strong>الحالة التنظيمية:</strong> 
                        <Badge bg={selectedProperty.regulatoryStatus === 'approved' ? 'success' : 'warning'} className="ms-2">
                          {selectedProperty.regulatoryStatus === 'approved' ? 'معتمد' : 'قيد المراجعة'}
                        </Badge>
                      </p>
                    </Col>
                    <Col md={6}>
                      <p><strong>عدد الفترات الكلي:</strong> {selectedProperty.totalTimeSlots}</p>
                      <p><strong>الفترات المتاحة:</strong> {selectedProperty.availableSlots}</p>
                    </Col>
                  </Row>
                  
                  <ProgressBar 
                    now={(selectedProperty.availableSlots / selectedProperty.totalTimeSlots) * 100}
                    label={`${Math.round((selectedProperty.availableSlots / selectedProperty.totalTimeSlots) * 100)}% متاح`}
                    className="mt-2"
                  />
                </div>
                
                <TimeSlotSelector slots={selectedProperty.timeSlots} />
                
                {selectedTimeSlot && (
                  <div className="mt-4 p-3 bg-light rounded">
                    <h6>تفاصيل الحجز</h6>
                    <Row>
                      <Col md={6}>
                        <p><strong>الفترة المحددة:</strong></p>
                        <p>
                          من {new Date(selectedTimeSlot.startDate).toLocaleDateString('ar-SA')}<br/>
                          إلى {new Date(selectedTimeSlot.endDate).toLocaleDateString('ar-SA')}
                        </p>
                      </Col>
                      <Col md={6} className="text-end">
                        <h4 className="text-primary">{selectedTimeSlot.price.toLocaleString()} ر.س</h4>
                        <Button 
                          variant="primary" 
                          className="mt-2"
                          onClick={() => setShowBookingModal(true)}
                          disabled={!userWallet}
                        >
                          تأكيد الشراء
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
                          التفاصيل التنظيمية والعقارية
                        </Accordion.Header>
                        <Accordion.Body>
                          <small>
                            <p><strong>رقم الصك:</strong> {selectedProperty.deedNumber}</p>
                            <p><strong>معرف الرمز الممول:</strong> {selectedProperty.ownerWallet}</p>
                            <p><strong>تاريخ التسجيل:</strong> 2024-01-15</p>
                            <p><strong>الحالة العقارية:</strong> سليم ومفرغ</p>
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
          <Modal.Title>تأكيد عملية الشراء</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <i className="bi bi-safe2-fill text-primary" style={{ fontSize: '3rem' }}></i>
          </div>
          
          <h6 className="text-center mb-3">تفاصيل المعاملة</h6>
          
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between">
              <span>العقار:</span>
              <span>{selectedProperty?.title}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>الفترة:</span>
              <span>{selectedTimeSlot?.startDate} - {selectedTimeSlot?.endDate}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>المبلغ:</span>
              <span className="h5 text-primary">{selectedTimeSlot?.price.toLocaleString()} ر.س</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>رسوم الخدمة:</span>
              <span>{(selectedTimeSlot?.price || 0 * 0.02).toLocaleString()} ر.س</span>
            </ListGroup.Item>
          </ListGroup>
          
          <div className="mt-4">
            <Form.Check 
              type="checkbox"
              label="أوافق على الشروط والأحكام والأنظمة المعمول بها من الهيئة العقارية"
              id="terms-agreement"
              className="mb-3"
            />
            
            <Form.Check 
              type="checkbox"
              label="أوافق على إصدار صك ملكية رقمي معتمد"
              id="deed-agreement"
            />
          </div>
          
          <Alert variant="warning" className="mt-3">
            <i className="bi bi-exclamation-triangle me-2"></i>
            سيتم تنفيذ هذه المعاملة عبر العقود الذكية وسيتم تسجيل الصك رقمياً في سجلات الهيئة العقارية
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBookingModal(false)}>
            إلغاء
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {
              initiatePurchase(selectedProperty?.id || '', selectedTimeSlot?.id || '');
              setShowBookingModal(false);
            }}
          >
            تأكيد الشراء والتوثيق
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Digital Deed Viewer */}
      <DigitalDeedViewer />

      {/* Technology Indicators Footer */}
      <Row className="mt-5 pt-4 border-top">
        <Col>
          <div className="text-center">
            <h6 className="text-muted mb-3">تقنيات المنصة المعتمدة</h6>
            <div className="d-flex justify-content-center gap-4">
              <div className="text-center">
                <i className="bi bi-shield-check text-success" style={{ fontSize: '2rem' }}></i>
                <p className="small mt-1">توثيق رقمي</p>
              </div>
              <div className="text-center">
                <i className="bi bi-cpu-fill text-primary" style={{ fontSize: '2rem' }}></i>
                <p className="small mt-1">عقود ذكية</p>
              </div>
              <div className="text-center">
                <i className="bi bi-lock-fill text-info" style={{ fontSize: '2rem' }}></i>
                <p className="small mt-1">معاملات آمنة</p>
              </div>
              <div className="text-center">
                <i className="bi bi-building text-warning" style={{ fontSize: '2rem' }}></i>
                <p className="small mt-1">توافق تنظيمي</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TimesharePlatform;