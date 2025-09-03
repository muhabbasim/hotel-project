import Avatar1 from '/src/assets/images/users/avatar-6.png';
import Avatar2 from '/src/assets/images/users/avatar-1.png';
import Avatar3 from '/src/assets/images/users/avatar-2.png';
import Avatar5 from '/src/assets/images/users/avatar-4.png';
import Avatar6 from '/src/assets/images/users/avatar-5.png';
import Avatar7 from '/src/assets/images/users/avatar-7.png';
import Avatar8 from '/src/assets/images/users/avatar-8.png';
import Avatar9 from '/src/assets/images/users/avatar-9.png';
import Avatar10 from '/src/assets/images/users/avatar-10.png';

// ===========================|| ORGANIZATION CHART - USERS ||=========================== //

export const data = [
  {
    name: 'Anne Teak',
    role: 'CEO',
    avatar: Avatar1,
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    skype: 'https://www.skype.com/en/',
    children: [
      {
        name: 'Colin Sik',
        role: 'CFO',
        avatar: Avatar1,
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        skype: 'https://www.skype.com/en/',
        children: [
          {
            name: 'Karen Onnabit',
            role: 'Controller',
            avatar: Avatar2,
            linkedin: 'https://www.linkedin.com/',
            facebook: 'https://www.facebook.com/',
            skype: 'https://www.skype.com/en/'
          }
        ]
      },
      {
        name: 'Jen Tile',
        role: 'VP of Marketing',
        avatar: Avatar3,
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        skype: 'https://www.skype.com/en/',

        children: [
          {
            name: 'Anne Thurium',
            role: 'Manager',
            avatar: Avatar8,
            linkedin: 'https://www.linkedin.com/',
            facebook: 'https://www.facebook.com/',
            skype: 'https://www.skype.com/en/',

            children: [
              {
                name: 'Liz Erd',
                role: 'Junior Manager',
                avatar: Avatar6,
                linkedin: 'https://www.linkedin.com/',
                facebook: 'https://www.facebook.com/',
                skype: 'https://www.skype.com/en/'
              },
              {
                name: 'Percy Vere',
                role: 'Programmer',
                avatar: Avatar7,
                linkedin: 'https://www.linkedin.com/',
                facebook: 'https://www.facebook.com/',
                skype: 'https://www.skype.com/en/'
              }
            ]
          }
        ]
      },
      {
        name: 'Harriet Upp',
        role: 'VP of IT',
        avatar: Avatar9,
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        skype: 'https://www.skype.com/en/',

        children: [
          {
            name: 'Mark Ateer',
            role: 'System Admin',
            avatar: Avatar5,
            linkedin: 'https://www.linkedin.com/',
            facebook: 'https://www.facebook.com/',
            skype: 'https://www.skype.com/en/'
          },
          {
            name: 'Dave Allippa',
            role: 'System Admin',
            avatar: Avatar10,
            linkedin: 'https://www.linkedin.com/',
            facebook: 'https://www.facebook.com/',
            skype: 'https://www.skype.com/en/'
          }
        ]
      }
    ]
  }
];
