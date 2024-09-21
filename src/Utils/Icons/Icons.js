import React from 'react';
import {MaterialIcons} from '../AppConstant';

// interface IconProps {
//   color: string;
// }

export const BarIcon = ({color}) => (
  <MaterialIcons name="format-list-bulleted" size={25} color={color} />
);

export const TrashIcon = ({color}) => (
  <MaterialIcons name="delete" size={25} color={color} />
);

export const SettingsIcon = ({color}) => (
  <MaterialIcons name="settings" size={25} color={color} />
);

export const CartIcon = ({color}) => (
  <MaterialIcons name="shopping-cart" size={25} color={color} />
);
export const LogoutMemberIcon = ({color}) => (
  <MaterialIcons name="person-off" size={25} color={color} />
);
export const EmailIcon = ({color}) => (
  <MaterialIcons name="email" size={25} color={color} />
);
export const PhoneIcon = ({color}) => (
  <MaterialIcons name="phone" size={25} color={color} />
);
export const PersonIcon = ({color}) => (
  <MaterialIcons name="person" size={25} color={color} />
);
export const FacebookIcon = ({color}) => (
  <MaterialIcons name="facebook" size={25} color={color} />
);
export const GoogleIcon = ({color}) => (
  <MaterialIcons name="add-to-drive" size={25} color={color} />
);
