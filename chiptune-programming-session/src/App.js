import React from 'react';
import { Deck, Slide, FlexBox, Box, Heading, Notes, Text, Link, Appear, Image, Progress } from 'spectacle';
import './App.css';
import image_1 from './images/1.webp';
import image_2 from './images/2.webp';
import image_3 from './images/3.webp';
import image_4 from './images/4.webp';
import image_5 from './images/5.png';
import image_6 from './images/6.png';
import image_7 from './images/7.png';
import image_8 from './images/8.png';
import image_9 from './images/9.webp';
import image_10 from './images/10.webp';
import image_11 from './images/11.png';
import image_12 from './images/12.webp';

function App() {
  return (
    <div className="App">
      <Deck>
        <Slide>
          <FlexBox flexDirection="column" height="100%">
            <Heading fontSize="100px">Chiptune & Programming</Heading>
            <Link
              fontSize="100px"
              style={{ textDecoration: 'none' }}
              href="https://open.spotify.com/track/1y69XlEsszRp6Vj40JWkL5?si=7gCTPIbZQgGoxb1jP7VczA"
              target="_blank"
            >
              <span role="img" aria-label="">
                ⌨️
              </span>
            </Link>
          </FlexBox>
          <Progress />
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px">什么是 chiptune(芯片音乐)?</Heading>
            <FlexBox justifyContent="center">
              <Box width="80%">
                <Text textAlign="center">是电子音乐的一个分支</Text>
                <Text textAlign="center">
                  使用来自复古游戏机/老式电脑（比如FC/Gameboy）中的声音芯片所产生的声音元素来制作音乐
                </Text>
                <Text textAlign="center">8 bit</Text>
              </Box>
            </FlexBox>
          </Box>
          <Progress />
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px">Old Days 8 Bit</Heading>
            <Appear elementNum={0}>
              <Image src={image_5} />
              <Image src={image_6} />
              <Image src={image_7} />
              <Image src={image_8} />
            </Appear>
            <Appear elementNum={1}>
              <Image width="45%" src={image_3} />
            </Appear>
          </Box>
          <Progress />
          <Notes>
            Reference: https://www.nintendo.com/nes-classic/ https://en.wikipedia.org/wiki/Nintendo_Entertainment_System
          </Notes>
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px">New Age 8 Bit</Heading>
            <FlexBox alignItems="center" justifyContent="space-around">
              <Appear elementNum={0}>
                <Image width="60%" src={image_4} />
              </Appear>
              <Appear elementNum={1}>
                <FlexBox flexDirection="column">
                  <Image width="60%" src={image_2} />
                  <Image width="60%" src={image_1} />
                </FlexBox>
              </Appear>
            </FlexBox>
          </Box>
          <Progress />
          <Notes>
            Reference: https://store.steampowered.com/tags/en/Pixel+Graphics#p=0&tab=TopRated
            https://www.youtube.com/watch?v=jh7tCk5N4rk
            https://www.vice.com/en_us/article/bmdpyz/creativity-bytes-a-brief-guide-to-chiptune-music
          </Notes>
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading margin="20px 20px 200px 20px" fontSize="60px">
              Press Start To Play
            </Heading>
            <Text textAlign="center">
              <Link
                fontSize="60px"
                href="https://cirrusretro.com/listen/159-super-mario-bros-nintendo-nes"
                target="_blank"
              >
                Start
              </Link>
            </Text>
          </Box>
          <Progress />
          <Notes>Reference: https://cirrusretro.com/listen/159-super-mario-bros-nintendo-nes</Notes>
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px">Waveform(波形图)</Heading>
            <iframe
              height="460"
              style={{ width: '100%' }}
              scrolling="no"
              title="Web Audio API: waveforms"
              src="https://codepen.io/hellocreep/embed/RwWWmzX?height=265&theme-id=light&default-tab=result"
              frameBorder="no"
              allowFullScreen="true"
              loading="lazy"
            >
              See the Pen <a href="https://codepen.io/hellocreep/pen/RwWWmzX">Web Audio API: waveforms</a> by liwen (
              <a href="https://codepen.io/hellocreep">@hellocreep</a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Box>
          <Progress />
          <Notes>Reference: https://codepen.io/hellocreep/pen/RwWWmzX</Notes>
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading margin="20px 20px 100px 20px" fontSize="60px">
              Press Start To Continue
            </Heading>
            <Text textAlign="center">
              <Link
                fontSize="60px"
                href="https://cirrusretro.com/listen/27-castlevania-2-simons-quest-nintendo-nes"
                target="_blank"
              >
                Start
              </Link>
            </Text>
          </Box>
          <Progress />
          <Notes>
            Reference: https://cirrusretro.com/listen/159-super-mario-bros-nintendo-nes
            https://cirrusretro.com/listen/27-castlevania-2-simons-quest-nintendo-nes
          </Notes>
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px">如何制作 8bit 音乐</Heading>
            <FlexBox justifyContent="space-between" alignItems="center">
              <Box width="30%">
                <Image src={image_10} />
                <Text textAlign="center">Ableton</Text>
              </Box>
              <Box width="30%">
                <Image src={image_11} />
                <Text textAlign="center">Famitracker</Text>
              </Box>
              <Box width="30%">
                <Image src={image_9} />
                <Text textAlign="center">Garageband</Text>
              </Box>
            </FlexBox>
          </Box>
          <Progress />
          <Notes>
            Reference: https://www.ableton.com/en/live/ http://famitracker.com/ https://www.apple.com/mac/garageband/
          </Notes>
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px">{'<audio>'}</Heading>
            <Text textAlign="center">可以播放声音</Text>
            <Text textAlign="center">可以制作指定频率的波形</Text>
            <Text textAlign="center">可以对声音添加效果</Text>
            <Text textAlign="center">
              <Link href="https://tonejs.github.io" target="_blank">
                tone.js
              </Link>
            </Text>
          </Box>
          <Progress />
          <Notes>
            Reference: https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API https://tonejs.github.io
          </Notes>
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px" margin="20px 20px 100px 20px">
              Demo
            </Heading>
            <Text textAlign="center">
              <Link fontSize="60px" href="https://codesandbox.io/s/tone-js-demo-8ldzw" target="_blank">
                Try
              </Link>
            </Text>
          </Box>
          <Progress />
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px" margin="20px 20px 100px 20px">
              实际 Web Audio 使用
            </Heading>
            <Text textAlign="center">
              <Link fontSize="60px" href="https://js13kgames.com/#winners" target="_blank">
                js13kGames
              </Link>
            </Text>
            <Text textAlign="center">
              <Link fontSize="60px" href="https://learningmusic.ableton.com/" target="_blank">
                Learning Music
              </Link>
            </Text>
          </Box>
          <Progress />
        </Slide>
        <Slide>
          <Box height="100%">
            <Heading fontSize="60px">Sonic Pi</Heading>
            <Box width="60%" margin="0 auto">
              <Image width="60%" src={image_12} />
              <Text fontSize="22px" textAlign="center">
                Sonic Pi is a code-based music creation and performance tool.
              </Text>
            </Box>
          </Box>
          <Progress />
          <Notes>Reference： https://sonic-pi.net/</Notes>
        </Slide>
        <Slide>
          <FlexBox height="100%" alignItems="center" justifyContent="center">
            <Heading>Thanks.</Heading>
          </FlexBox>
          <Notes>如果你对音乐感兴趣，可以顺便学习编程 如果你对编程感兴趣，可以顺便学习音乐</Notes>
          <Notes>机核电台 https://www.gcores.com/radios/26610 纪录片 https://movie.douban.com/subject/25987095/</Notes>
        </Slide>
      </Deck>
    </div>
  );
}

export default App;
