'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ListItem } from './View';

export default function GuestbookApp() {
	const [guestbook, setGuestbook] = useState<{ name: string }[]>([]);
	const [inputValue, setInputValue] = useState('');

	const handleAddGuest = () => {
		const name = inputValue.trim();
		if (name) {
			setGuestbook([...guestbook, { name }]);
			setInputValue('');
			console.log([...guestbook, { name }]);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleAddGuest();
		}
	};

	const handleDelete = (index: number) => {
		setGuestbook(guestbook.filter((_, i) => i !== index));
	};

	return (
		<div id="app">
			<Header />
			
			<input
				id="nameInput"
				placeholder="이름을 입력하세요"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			
			<button id="addBtn" onClick={handleAddGuest}>
				등록
			</button>
			
			<ul id="guestList">
				{guestbook.map((guest, index) => (
					<ListItem key={index} name={guest.name} index={index} onDelete={handleDelete} />
				))}
			</ul>
			
			<Footer />
		</div>
	);
} 