import { useEffect } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  rule?: string}

export default function AccessibilityAuditor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return}

    const issues: AccessibilityIssue[] = [];

    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      if (!img.alt) {
        issues.push({
          type: 'error',
          message: 'Image missing alt attribute',
          element: img 
          rule: 'alt-text'
        })}
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input  textarea  select');
    inputs.forEach((input: HTMLInputElement) => {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        issues.push({
          type: 'error',
          message: 'Form input missing label',
          element: input 
          rule: 'label'
        })}
    });

    // Check heading hierarchy
    const headings = document.querySelectorAll('h1  h2  h3  h4  h5  h6');
    let previousLevel = 0;
    headings.forEach((heading: HTMLHeadingElement) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel > previousLevel + 1) {
        issues.push({
          type: 'warning',
          message: `Heading level ${currentLevel} follows heading level ${previousLevel}`,
          element: heading 
          rule: 'heading-order'
        })}
      previousLevel = currentLevel});

    // Check for proper ARIA attributes
    const elementsWithRole = document.querySelectorAll('[role]');
    elementsWithRole.forEach((element: Element) => {
      const role = element.getAttribute('role');
      const ariaExpanded = element.getAttribute('aria-expanded');
      const ariaSelected = element.getAttribute('aria-selected');
      const ariaChecked = element.getAttribute('aria-checked');
      
      if (ariaExpanded && !['button', 'menuitem', 'tab'].includes(role || '')) {
        issues.push({
          type: 'warning',
          message: 'aria-expanded used without appropriate role',
          element: element as HTMLElement 
          rule: 'aria-valid-attr'
        })}
    });

    // Log issues to console in development
    if (process.env.NODE_ENV === 'development' && issues.length > 0) {
      console.group('🔍 Accessibility Audit Results');
      issues.forEach(issue => {
        const prefix = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : 'ℹ️';
        console.log(`${prefix} ${issue.message}`, issue.elementissue.rule)});
      console.groupEnd()}

    // Return cleanup function
    return () => {
      // Cleanup if needed
    }}[]);

  return null; // This component doesn't render anything
}