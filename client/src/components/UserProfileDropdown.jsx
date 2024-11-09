// components/UserProfileDropdown.js
import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const UserProfileDropdown = ({ user, onLogout }) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" size="sm">
                <Avatar size="sm" src={user.photoURL || 'default-avatar.png'} />
            </MenuButton>
            <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={onLogout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserProfileDropdown;
