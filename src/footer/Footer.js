import './Footer.css';
import React, { useState, useEffect } from 'react';

function Footer() {

  const [lastCommitDate, setLastCommitDate] = useState('');

  useEffect(() => {
    // GitHub API를 사용하여 최근 커밋의 시간을 가져오는 함수
    const fetchLastCommitDate = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Cometary/portfolio/commits');
        const commits = await response.json();
        if (commits.length > 0) {
          const lastCommitTime = new Date(commits[0].commit.author.date);
          const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
          const formattedDate = lastCommitTime.toLocaleDateString('ko-KR', options);
          setLastCommitDate(formattedDate);
        }
      } catch (error) {
        console.error('Error fetching last commit date:', error);
      }
    };

    fetchLastCommitDate();
  }, []);

  return(
    <div className='footer'>
      <div className="footerContent">
        <div className='footerText'>
          <div>이름 : Kim Hye Seong</div>
          <div>이메일 : rlagptjd2002@naver.com</div>
          <div>깃허브 : github.com/Cometary</div>
        </div>
        <p>최근 수정 일자: {lastCommitDate}</p>
      </div>
      <div className='footerSpace'></div>
    </div>
  );
}
export default Footer;