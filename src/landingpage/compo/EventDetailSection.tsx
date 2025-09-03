import React from 'react'
import EventFaq from './EventFaq';

interface EventProp {
    eventData: {
        youtubeUrl: string;
        title: string;
        dayDate: string;   
        monthYear: string;
        startTime: string;
        endTime: string;
        participants: string;
        skillLevel: string;
    }
}
const EventDetailSection:React.FC<EventProp> = () => {
  return (
    <div className="tl-event-details-container pt-180 pb-120">
      <div className="container">
        <div className="row tl-event-details-row g-0">
          <div className="col-lg-8x">
            <div className="tl-event-details-left">
              <Licenses/>
              <EventFaq/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8 py-10">
    <h2 className="text-xl font-bold mb-4 text-right">{title}</h2>
    <div className="space-y-4 text-right leading-relaxed">{children}</div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6 py-2">
    <h3 className="text-lg font-semibold mb-2 text-right pt-40">{title}</h3>
    <div className="text-right space-y-2">{children}</div>
  </div>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-decimal list-inside space-y-2 text-right">
    {items.map((item, i) => (
      <li style={{ fontSize: 18 }} className='py-1' key={i}>{item}</li>
    ))}
  </ul>
);

function Licenses() {
  return (
    <div className="tl-event-details-key-content tl-event-details-area">
      <Section title="التراخيص">
        <SubSection title="ترخيص مزاولة نشاط المشاركة بالوقت">
          <h4 className="font-semibold mb-2 py-2">شروط الحصول على الترخيص:</h4>
          <List
            items={[
              "أن يكون لدى مقدم الطلب سجل تجاري.",
              "أن يكون مقدم الطلب مالكا للأرض أو مستأجرا لها لمدة لا تقل عن 22 سنة، على أن ينص عقد الإيجار على استخدام العقار لممارسة هذا النشاط.",
              "التأشير على أصل الصك إلى أن العقار يتضمن وحدات مخصصة لصالح نشاط المشاركة بالوقت، وأنه لا يجوز بيع تلك الوحدات إلا بناء على خطاب موافقة من الهيئة.",
              "ألا تقل عدد الوحدات المخصصة للبيع عن أربعين وحدة في موقع واحد.",
              "التعاقد مع إدارة مؤهلة فنيا لإدارة النشاط، ويجوز أن يتولى البائع إدارة النشاط متى كان مؤهلا لذلك.",
              "تعيين مسؤول صرف للعقارات المراد تسويقها تحت الإنشاء أو التي سيتم إنشاؤها مستقبلا.",
              "التأمين على العقار لدى شركة مرخص لها داخل المملكة، ويشمل التأمين على الطرف الثالث ضد كافة المخاطر بما فيها المخاطر الطبيعية."
            ]}
          />
        </SubSection>

        <SubSection title="مدة الترخيص وتحديث بياناته">
          <List
            items={[
              "تحدد الهيئة مدة الترخيص بحد أقصى 32 سنة قابلة للتجديد.",
              "يجب تحديث بيانات الترخيص كل 3 سنوات وفق النموذج المعد لذلك، قبل نهاية المدة اللازمة للتحديث مع سداد المقابل المالي وإرفاق المستجدات أو التغييرات على العقار أو العقود المبرمة.",
              "تجدد الهيئة الترخيص لمدة أو مدد أخرى لا تتجاوز 12 سنة."
            ]}
          />
        </SubSection>

        <SubSection title="الضمانات الواجب تقديمها للحصول على الترخيص">
          <List
            items={[
              "التأشير على أصل الصك إلى أن العقار يتضمن وحدات مخصصة لصالح نشاط المشاركة بالوقت، ولا يجوز بيعها إلا بموافقة الهيئة.",
              "تقديم ضمان بنكي من أحد البنوك المعتمدة في المملكة باسم الهيئة، ساري المفعول طوال مدة الرخصة، بمعدل 25,000 ريال لكل وحدة مخصصة لهذا النشاط.",
              "لا يتم الإفراج عن الضمان إلا بخطاب من الهيئة وبعد مضي 4 سنوات من بدء تشغيل الوحدات بشكل فعلي، ويتم تخفيضه تدريجيا سنويا لبقية المدة."
            ]}
          />
        </SubSection>

        <SubSection title="ترخيص تسويق الوحدات العقارية السياحية بنظام المشاركة بالوقت">
          <h4 className="font-semibold mb-2">شروط الحصول على الترخيص:</h4>
          <List
            items={[
              "أن يكون لدى البائع ترخيص لمزاولة نشاط المشاركة بالوقت.",
              "أن يكون لدى مقدم طلب التسويق سجل تجاري.",
              "تقديم بيان بعدد الوحدات المراد تسويقها بنظام المشاركة بالوقت، موضحا به المدينة، الموقع، المساحة، الثمن المقدر لها، وكيفية سداده، وعدد الحصص."
            ]}
          />
        </SubSection>
      </Section>
    </div>
  );
}
export default EventDetailSection