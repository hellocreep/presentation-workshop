import React from 'react';
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: '#167dff',
  secondary: '#ffffff'
});

const notes = {}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500}>
          <Slide transition={['zoom']} bgColor='primary' id='cover'>
            <Heading size={1} fit>Functional Programming In JS</Heading>
          </Slide>
          <Slide  transition={["slide"]} textColor='secondary' id='intro'>
            <Heading size={1} >Intro</Heading>
            <List>
              <Appear>
                <ListItem>No Functor, No Monad, No Any Fancy Words</ListItem>
              </Appear>
              <Appear>
                <ListItem>Basic Concepts In Practice</ListItem>
              </Appear>
              <Appear>
                <ListItem>Common Usage</ListItem>
              </Appear>
              <Appear>
                <ListItem>Tips</ListItem>
              </Appear>
              <Appear>
                <ListItem>Lodash/Ramda/Lazy.js</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide id='pis' notes={notes.pis}>
            <Heading size={2} fit>Pure/Impure Functions And Side Effect</Heading>
          </Slide>
          <Slide id='pure' notes={notes.pure}>
            <Heading size={2}>Pure Function</Heading>
            <List>
              <ListItem>{'Calling the function with the same inputs always returns the same output.'}</ListItem>
              <ListItem>{'Calling the function produces no side-effects'}</ListItem>
              <ListItem>{'Relies on no external state'}</ListItem>
            </List>
          </Slide>
          <Slide id='impure' notes={notes.impure}>
            <Heading size={2} fit>Impure Function And Side Effects</Heading>
            <List>
              <ListItem>Network Calls</ListItem>
              <ListItem>Files Written</ListItem>
              <ListItem>Database Manipulate</ListItem>
              <ListItem>Global Variables Modified</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>
          <Slide id='pureExample'>
            <Heading size={3} textColor='secondary'>{'Examples'}</Heading>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/0_pure.js')} />
            </Appear>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/1_pure.js')} />
            </Appear>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/2_pure.js')} />
            </Appear>
          </Slide>
          <Slide id='impureExample'>
            <Heading size={3} textColor='secondary'>{'Examples'}</Heading>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/0_impure.js')} />
            </Appear>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/1_impure.js')} />
            </Appear>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/3_pure.js')} />
            </Appear>
          </Slide>
          <Slide id='pure-benefits'>
            <Heading size={2} fit>Benefits of Pure Functions</Heading>
            <List>
              <ListItem>Testable</ListItem>
              <ListItem>Reuseable</ListItem>
              <ListItem>Cacheable</ListItem>
              <ListItem>Parallelization</ListItem>
            </List>
          </Slide>
          <Slide id='pure-benefits-examples' notes={notes.pureBenefits}>
            <Heading size={3} textColor='secondary'>Examples</Heading>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/0_pure-benefit.js')} />
            </Appear>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/1_pure-benefit.js')} />
            </Appear>
          </Slide>
          <Slide notes={notes.hof} id='hof'>
            <Heading size={2}>Higher Order Function</Heading>
            <List>
              <ListItem>map, forEach, filter...</ListItem>
              <ListItem>curry, combinator, decorator...</ListItem>
            </List>
          </Slide>
          <Slide id='immutable'>
            <Heading>Immutable/Persistent</Heading>
            <List>
              <ListItem>Share Structure Reduces Memeory Usage</ListItem>
              <ListItem>Data Changes Are More Explicit</ListItem>
              <ListItem>It Makes Certain Features Easier(undo/redo)</ListItem>
            </List>
          </Slide>
          <Slide id='pointfree' notes={notes.pointfree}>
            <Heading size={2} fit>Pointfree/Tacit Programming</Heading>
            <Text textColor='secondary'>Pointfree style means never having to say your data</Text>
            <CodePane
              lang='js'
              source={require('raw!../examples/pointfree.js')} />
          </Slide>
          <Slide id='thunk' notes={notes.thunk}>
            <Heading size={2}>Lazy Evaluation</Heading>
            <Text textColor='secondary'>Thunk/Generator</Text>
            <CodePane
              lang='js'
              source={require('raw!../examples/thunk.js')} />
          </Slide>
          <Slide id='lazy' notes={notes.lazy}>
            <Heading size={2}>Example</Heading>
            <CodePane
              lang='js'
              source={require('raw!../examples/lazy.js')} />
          </Slide>
          <Slide id='curry' notes={notes.curry}>
            <Heading size={2} fit>Currying And Partial Application</Heading>
          </Slide>
          <Slide id='curry-defination' notes={notes.curryDefination}>
            <Heading size={2}>Currying</Heading>
            <List>
              <ListItem>Unary</ListItem>
              <ListItem>Higher Order Function</ListItem>
              <ListItem>With Internal State</ListItem>
            </List>
          </Slide>
          <Slide id='curry-examples'>
            <Heading size={2}>Examples</Heading>
            <CodePane
              lang='js'
              source={require('raw!../examples/0_currying.js')} />
          </Slide>
          <Slide id='partial-defination'>
            <Heading size={2}>Partial Application</Heading>
            <List>
              <ListItem>Prepend Arguments</ListItem>
              <ListItem>Higher Order Function</ListItem>
              <ListItem>With Internal State</ListItem>
            </List>
          </Slide>
          <Slide id='partial-examples'>
            <Heading size={2}>Examples</Heading>
            <CodePane
              lang='js'
              source={require('raw!../examples/0_partial.js')} />
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/1_partial.js')} />
            </Appear>
          </Slide>
          <Slide id='compose' notes={notes.compose}>
            <Heading size={2} fit>Compose(FlowRight) And Pipe(Flow)</Heading>
            <List>
              <ListItem>Function Reuse</ListItem>
              <ListItem>No Intermediate Variables</ListItem>
            </List>
            <Text textColor='secondary' textSize={'1.5rem'} textAlign={'left'}>{'Note: The rightmost function may have any arity; the remaining functions must be unary'}</Text>
          </Slide>
          <Slide id='composition'>
            <Heading size={2}>Examples</Heading>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/0_pipe.js')} />
            </Appear>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/0_compose.js')} />
            </Appear>
          </Slide>
          <Slide id='object-array'>
            <Heading size={2} fit>Object And Array Manipulation</Heading>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/0_array.js')} />
            </Appear>
            <Appear>
              <CodePane
                lang='js'
                source={require('raw!../examples/0_object.js')} />
            </Appear>
          </Slide>
          <Slide id='tip'>
            <Heading size={2}>Tips</Heading>
            <List>
              <ListItem>Unary</ListItem>
              <ListItem>Tap</ListItem>
              <ListItem>Hindley-Milner Type Signatures</ListItem>
            </List>
          </Slide>
          <Slide id='unary'>
            <Heading size={2}>Unary</Heading>
            <Text textColor='secondary'>{'Takes function and turns it into a function taking one argument'}</Text>
            <CodePane
              lang='js'
              source={require('raw!../examples/0_unary.js')} />
          </Slide>
          <Slide>
            <Heading size={2}>Tap</Heading>
            <Text textColor='secondary'>{'Can be used for debugging'}</Text>
            <CodePane
              lang='js'
              source={require('raw!../examples/0_tap.js')} />
          </Slide>
          <Slide id='signature'>
            <Heading size={2} fit>Hindley-Milner Type Signatures</Heading>
            <CodePane
                lang='js'
                source={require('raw!../examples/0_milner.js')} />
          </Slide>
          <Slide textColor='secondary' id='recap'>
            <Heading size={2}>Recap</Heading>
            <List>
              <Appear>
                <ListItem>99% Functions In Your Code Should Be Pure</ListItem>
              </Appear>
              <Appear>
                <ListItem>Make Sure The 1% Impure Functions Invoke At Right Place</ListItem>
              </Appear>
              <Appear>
                <ListItem>Keep Your Data Immutable</ListItem>
              </Appear>
              <Appear>
                <ListItem>Do One Thing At A Time, And Do It Well</ListItem>
              </Appear>
              <Appear>
                <ListItem>Go To Learn A Real Functional Programming Language</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide textColor='secondary' id='ref'>
            <Heading size={2}>References</Heading>
            <List>
              <ListItem>
                <Link href='https://github.com/fantasyland/fantasy-land'>
                  <Text textColor='secondary'>Fantasy Land</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html'>
                  <Text textColor='secondary'>Functors, Applicatives, Monads In Pictures</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='http://randycoulman.com/blog/categories/thinking-in-ramda/'>
                  <Text textColor='secondary'>Thinking In Ramda</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-intro/'>
                  <Text textColor='secondary'>A Gentle Introduction To Functional Javascript</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='https://github.com/llh911001/mostly-adequate-guide-chinese'>
                  <Text textColor='secondary'>Mostly Adequate Guide 中文版</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='https://leanpub.com/javascriptallongesix/read'>
                  <Text textColor='secondary'>JavaScript Allongé, the "Six" Edition</Text>
                </Link>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
