let isPalindrome = sentence => {
  
  if(typeof sentence !== 'string') throw new Error('Input must be a string');
  if(sentence === '') throw new Error('Empty strings are not palindromes');
  if(sentence.trim() === '') return false;

  return sentence === sentence.split('').reverse().join('')
};

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

  it('true for mom', () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  it('false for dude', () => {
    expect(isPalindrome('dude')).toBe(false);
  });

  it('false for dad mom', () => {
    expect(isPalindrome('dad mom')).toBe(false);
  });
  it('true for whitespace', () => {
    expect(isPalindrome('   ')).toBe(false);
  });

  it('error for empty string', () => {
    expect(() => {
      isPalindrome('');
    }).toThrowError('Empty strings are not palindromes');
  });

  it('error for not a string', () => {
    expect(() => {
      isPalindrome(121);
    }).toThrowError('Input must be a string');
  });
});