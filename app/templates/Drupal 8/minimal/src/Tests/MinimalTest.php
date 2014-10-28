<?php

/**
 * @file
 * Contains Drupal\<%= machineName %>\Tests\<%= machineNameUcfirst %>Test.
 */

namespace Drupal\<%= machineName %>\Tests;

use Drupal\simpletest\WebTestBase;

/**
 * Tests <%= machineNameUcfirst %> installation profile expectations.
 *
 * @group <%= machineName %>
 */
class <%= machineNameUcfirst %>Test extends WebTestBase {

  protected $profile = '<%= machineName %>';

  /**
   * Tests <%= machineNameUcfirst %> installation profile.
   */
  function test<%= machineNameUcfirst %>() {
    $this->drupalGet('');
    // Check the login block is present.
    $this->assertLink(t('Create new account'));
    $this->assertResponse(200);

    // Create a user to test tools and navigation blocks for logged in users
    // with appropriate permissions.
    $user = $this->drupalCreateUser(array('access administration pages', 'administer content types'));
    $this->drupalLogin($user);
    $this->drupalGet('');
    $this->assertText(t('Tools'));
    $this->assertText(t('Administration'));
  }
}
